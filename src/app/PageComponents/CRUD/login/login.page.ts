import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  genders:string[] = ['Masculino', 'Femenino', 'Otros'];
  formGroup:FormGroup;

  constructor(private fb:FormBuilder) { 
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

  

  ngOnInit() {
  }

}
