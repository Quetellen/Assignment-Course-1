import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  savedMessage = "";


submit(Login: unknown) {
  console.log("Form Submited", Login)
}

onSave(): void{
  this.savedMessage = 'You are now registered with us';
}
 

}



