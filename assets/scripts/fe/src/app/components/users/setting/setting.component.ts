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

  ngOnInit() {
    // initialize the form.
    this.form = new UserForm(new User);

    // TODO: improve this part by removing the setTimeout hack.
    // this is working but in efficient as i set 30millisecond
    // to wait for the user data to load. (will not work on slow
    // speed internet connection). Use async/await method and
    // find the right/more accurate timing.
    setTimeout(() => { 
      this.form.defaultValue(this.auth.user);
    }, 60);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    // send the form data to the backend if the value
    // format are valid.
    if (valid) {
      this.userservice.update(value)
        .then(resp => { this.state.go('user-settings'); })
        .catch(err => { console.log(err); });
    }
  }

}
