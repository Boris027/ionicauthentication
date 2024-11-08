import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  genders:string[] = ['Masculino', 'Femenino', 'Otros'];
  formGroup:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formGroup = this.fb.group({
      username:['', [Validators.required, Validators.minLength(2)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    }
  );
    this.formGroup.controls['username'].setValue("");
    this.formGroup.controls['email'].setValue("");
    this.formGroup.controls['password'].setValue("");
  }
  ngOnInit(): void {
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
