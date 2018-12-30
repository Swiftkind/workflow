import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { Login } from '../../../commons/models/login.models';
import { LoginForm } from '../../../commons/forms/login.forms';

import { AuthService } from '../../../commons/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form : LoginForm;

  constructor(
    private auth  : AuthService,
    private state : StateService
  ) { }

  ngOnInit() {
    // initialize the form.
    this.form = new LoginForm(new Login);
  }

  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    // send the form data to the backend if the value
    // format are valid.
    if (valid) {
      this.auth.login(value)
        .then(resp => {
          this.state.go('dashboard');
        })
        .catch(err => {
          this.form.err = err;
        })
      ;
    }
  }

}
