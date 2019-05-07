import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { Login } from '../../../commons/models/login.models';
import { LoginForm } from '../../../commons/forms/login.forms';

import { AuthService } from '../../../commons/services/auth/auth.service';
import { SlackService } from '../../../commons/services/auth/slack.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form : LoginForm;
  private previousState : any;
  constructor(
    private auth  : AuthService,
    private state : StateService,
    private slack : SlackService
  ) { }

  ngOnInit() {
    console.log(this.state.params);
    // load slack config
    this.slack.getConfig();
    // initialize the form.
    this.form = new LoginForm(new Login);
    console.log(this.slack.config);
  }

  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    // send the form data to the backend if the value
    // format are valid.
    if (valid) {
      this.auth.login(value)
        .then(resp => {
          this.previousState = this.state.params.next;
          console.log(this.previousState);
          this.auth.redirectTo(this.previousState);  
        })
        .catch(err => {
          this.form.err = err;
        })
      ;
    }
  }
}