import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { UserForm } from '../../../commons/forms/user.forms';
import { User } from '../../../commons/models/user.models';
import { AuthService } from '../../../commons/services/auth/auth.service';
import { UserService } from '../../../commons/services/auth/user.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  private form : UserForm;

  constructor(
    private auth  : AuthService,
    private state : StateService,
    private userservice : UserService
  ) {}

  async ngOnInit() {
    // initialize the form.
    this.form = new UserForm(new User);

    // assign values on the user form.
    // this uses `await` which will wait
    // for the request response before proceeding
    if (this.auth.user.id == null) {
      // get user information from the backend. (sync)
      await this.auth.setuser();
    }
    this.form.defaultValue(this.auth.user);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    // initiate submission of form.
    this.form.submitted = true;
    // send the form data to the backend if the value
    // format are valid.
    if (valid) {
      this.userservice.update(value)
        .then(resp => { this.state.go('user-settings'); })
        .catch(err => { console.log(err); });
    }
  }

}
