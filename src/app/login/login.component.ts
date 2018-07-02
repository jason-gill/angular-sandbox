import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  alertMessage = '';

  user: User = new User(1, 'jason.gill', '1234', 'Jason', 'Gill');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username !== this.user.username && this.password !== this.user.password) {
      this.alertMessage = 'Username or password is not valid!';
      return;
    }

    // Go to home page
    this.alertMessage = 'Go to home page';
  }
}
