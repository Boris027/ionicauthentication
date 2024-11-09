import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, timer } from 'rxjs';
import { IStrapiUser } from 'src/app/Core/models/Strapi-user.model';
import { User } from 'src/app/Core/models/User.model';
import { AUTHENTICATION_SERVICE } from 'src/app/Core/repository/tokens';
import { StrapiAuthenticationService } from 'src/app/Core/Services/impl/strapi-authentication.service';
import { IbaseAuthService } from 'src/app/Core/Services/interfaces/base-service-authentication.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {





  genders:string[] = ['Masculino', 'Femenino', 'Otros'];
  formGroup:FormGroup;
  isToastOpen: boolean=false;
  toastmessage:string=""
  toastcolor:string=""


  constructor(private fb:FormBuilder,private router:Router,
    @Inject(AUTHENTICATION_SERVICE) private auth:IbaseAuthService<User>
  ) { 
    this.formGroup = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],
      groupId:[null]
    }
  );
    
    this.formGroup.controls['email'].setValue("");
    this.formGroup.controls['password'].setValue("");
    
  }

  get email(){
    return this.formGroup.controls['email'];
  }

  get password(){
    return this.formGroup.controls['password'];
  }
  
  getDirtyValues(formGroup: FormGroup): any {
    const dirtyValues: any = {};
  
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control?.dirty) {
        dirtyValues[key] = control.value;
      }
    });
  
    return dirtyValues;
  }

  public submitForm(formGroup:FormGroup){
    const email=formGroup.get('email')?.value
    const password=formGroup.get('password')?.value

    this.auth.login({name:"",email:email,password:password,id:""}).subscribe({
      next:(value)=>{
          this.auth.setLocalToken(value)
          this.toastcolor="success"
          this.toastmessage="Credenciales Correctas"
          this.setOpen(true)
          timer(500).subscribe({
            next:(value)=>{
                this.router.navigate(["/splash","login.json"])
            },
          })
      },
      error:(err)=>{
          this.toastcolor="danger"
          this.toastmessage="Error al iniciar sesión"
          this.setOpen(true)
      },
    })
  }

  setOpen(estado: boolean) {
    this.isToastOpen=estado;
  }
    

  ngOnInit() {
    
  }

}
