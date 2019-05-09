import { Component, OnInit } from '@angular/core';
import { StateService, Transition } from '@uirouter/angular';

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
  private stateName = this.trans.params().next; // get statename from next= parameter
  constructor(
    private auth  : AuthService,
    private state : StateService,
    private slack : SlackService,
    private trans : Transition
  ) { }

  ngOnInit() {   
    console.log(this.trans);
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
          // if theres no value in the url parameter, 
          // automatically redirects to dashboard after authentication.
          if(this.stateName === null){ 
          return this.state.go('dashboard');
          }
          // if there's a redirect value, it redirects to that page after authentication.
          return this.state.go(this.stateName);
        })
        .catch(err => {
          this.form.err = err;
        })
      ;
    }
  }
}