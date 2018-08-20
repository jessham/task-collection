import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    imgURL: '',
    name: '',
    email: ''
  }

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  signup() {
    if (this.user.name && this.user.email) {
      this.loginService.signup(this.user)
        .then(response => {
          // storing user info in session storage
          sessionStorage.setItem('user',JSON.stringify(response));
          window.location.reload();
        })
        .catch(error => alert('An error occurred while signing up. Please try again later.'));
    } else
      alert('Please insert your name and email.')
  }
}
