import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

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

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }

  signup() {
    this.loginService.signup(this.user)
      .then(response => {
        // storing user info in session storage
        sessionStorage.setItem('user',JSON.stringify(response));
        window.location.reload();
      })
      .catch(error => alert('An error occurred while signing up. Please try again later.'));
  }
}
