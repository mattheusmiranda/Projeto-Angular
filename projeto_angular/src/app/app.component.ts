import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Matheus"; 
  userIdade = "17";

  userData = {
    email: 'matheus@gmail.com',
    role: 'Admin'
  }

  title = 'projeto_angular';
}
