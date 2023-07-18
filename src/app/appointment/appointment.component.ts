import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  savedMessage = "";





submit(Login: unknown) {
  console.log("Form Submited", Login)
}

onSave(): void{
  this.savedMessage = 'We received your prefered date and soon you will be receiving confirmation email.';
}
 

}
