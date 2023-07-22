import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import validateForm from '../validateform';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  isText = false;
  appointmentForm!: FormGroup;
  FormGroup: unknown;
  
  
  constructor(private fb: FormBuilder){ }
  
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.appointmentForm = this.fb.group ({
      username: ['',Validators.required],
      password:['', Validators.required]
    })
  }
  
  
  onSubmit(){
    if(this.appointmentForm.valid){
  
      console.log(this.appointmentForm.value)
      //Send the obj to database
  
  
    }else{
  
      console.log("Form is not valid");
      //throw the error using toaster and with required fields
      // validateForm.validateAllFormFields(this.appointmentForm);
      // alert('Your form is invalid')
  
    }
  }




// savedMessage = "";



// submit(Login: unknown) {
//   console.log("Form Submited", Login)
// }

// onSave(): void{
//   this.savedMessage = 'We received your prefered date and soon you will be receiving confirmation email.';
// }
 

}

