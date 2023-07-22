import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import validateForm from '../validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{


  type = "password";
  isText = false;
  eyeIcon = "fa-eye-slash";
  signUpForm!: FormGroup;
  text = "";


  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      passwor2: ['',Validators.required],
    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";  
  }

  onSignUp(){
    if(this.signUpForm.valid){
      //perform logic for signup

      console.log(this.signUpForm.value)
    }else{
      // validateForm.validateAllFormFields(this.signUpForm)
      //logic for throwing error

    }
  }

  
}
