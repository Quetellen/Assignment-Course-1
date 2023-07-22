import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import validateForm from '../validateform';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

type = "password";
isText = false;
eyeIcon= "fa-eye-slash";
loginForm!: FormGroup;
FormGroup: unknown;


constructor(private fb: FormBuilder){ }

ngOnInit(): void {
  this.loginForm = this.fb.group ({
    username: ['',Validators.required],
    password:['', Validators.required]
  })
}

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";  
}

onSubmit(){
  if(this.loginForm.valid){

    console.log(this.loginForm.value)
    //Send the obj to database


  }else{

    console.log("Form is not valid");
    //throw the error using toaster and with required fields
    // validateForm.validateAllFormFields(this.loginForm);
    // alert('Your form is invalid')

  }
}


//   savedMessage = "";



// submit(Login: unknown) {
//   console.log("Form Submited"), Login
// }

// onSave(): void{
//   this.savedMessage = 'You are now registered with us';
// }
 

}
