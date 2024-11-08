import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStrapiUser } from 'src/app/Core/models/Strapi-user.model';
import { User } from 'src/app/Core/models/User.model';
import { AUTHENTICATION_SERVICE } from 'src/app/Core/repository/tokens';
import { IbaseAuthService } from 'src/app/Core/Services/interfaces/base-service-authentication.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  genders:string[] = ['Masculino', 'Femenino', 'Otros'];
  formGroup:FormGroup;
  isToastOpen: boolean=false;
  toastmessage:string="";
  toastcolor:string="";

  constructor(private fb:FormBuilder,
    @Inject(AUTHENTICATION_SERVICE) private auth:IbaseAuthService<User>
  ) { 
    this.formGroup = this.fb.group({
      username:['', [Validators.required, Validators.minLength(2)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6)]]
    }
  );
    this.formGroup.controls['username'].setValue("");
    this.formGroup.controls['email'].setValue("");
    this.formGroup.controls['password'].setValue("");
  }
  ngOnInit(): void {
  }

  
  submitForm(formGroup:FormGroup) {
    const username=formGroup.get('username')?.value
    const email=formGroup.get('email')?.value
    const password=formGroup.get('password')?.value

    this.auth.register({name:username,email:email,password:password,id:''}).subscribe({
      next:(value)=>{
        this.auth.setLocalToken(value)
        this.toastcolor="success"
        this.toastmessage="Se ha registrado con éxito"
        this.setOpen(true)
      },error:(err)=>{
        console.log(err)
        this.toastcolor="danger"
        this.toastmessage = err?.error?.error?.message ?? "unknown error";
        this.setOpen(true)
      },
    })
  }

  setOpen(estado:boolean){
    this.isToastOpen=estado;
  }

  
  get username(){
    return this.formGroup.controls['username'];
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

}
