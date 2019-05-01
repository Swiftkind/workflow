import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { UserForm } from '../../../commons/forms/user.forms';
import { User } from '../../../commons/models/user.models';

import { EditPasswordModel } from '../../../commons/models/edit-password.models'

import { AddPasswordForm } from '../../../commons/forms/password.forms'
import { EditPasswordForm } from '../../../commons/forms/password.forms'

import { AddPasswordModel } from '../../../commons/models/add-password.models'

import { AuthService } from '../../../commons/services/auth/auth.service';
import { UserService } from '../../../commons/services/auth/user.service';
import { NavService } from '../../../commons/services/utils/nav.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  private form : UserForm;

  private edit_password_form : EditPasswordForm;
  private add_password_form : AddPasswordForm;

  // private edit_password_form : EditPasswordForm
  // private add_password_form : AddPasswordForm
  private checkPass:boolean;
  private switchExpression: string;


  constructor(
    private auth  : AuthService,
    private state : StateService,
    private userservice : UserService,
    private nav : NavService
  ) {}

  async ngOnInit() {
    // initialize the form.
    this.switchExpression = null;
    this.form = new UserForm(new User);

    this.nav.setNav('Profile', true);

    this.edit_password_form = new EditPasswordForm(new EditPasswordModel);
    this.add_password_form = new AddPasswordForm(new AddPasswordModel);

    // assign values on the user form.
    // this uses `await` which will wait
    // for the request response before proceeding
    if (this.auth.user.id == null) {
      // get user information from the backend. (sync)
      await this.auth.setuser();
    }
    this.form.defaultValue(this.auth.user);
    this.checkPass = this.auth.user.has_usable_pass
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

  onEditPasswordSubmit({value, valid}: {value: EditPasswordModel, valid:boolean}){
    // initiate submission of form.
    this.edit_password_form.submitted = true;
    // send the form data to the backend if the value
    // format are valid.
    if(valid){
      this.userservice.updatePassword(value)
        // initialize switchExpression to redirect to success view
        // re initialize edit password form to empty fields
        .then(resp => { this.switchExpression = 'success'; this.edit_password_form = new EditPasswordForm(new EditPasswordModel); })
        .catch(err => { this.edit_password_form.err = err.error.non_field_errors; });
    }
  }

  onAddPasswordSubmit({value, valid}: {value: AddPasswordModel, valid:boolean}){
    // initiate submission of form.
    this.add_password_form.submitted = true;
    // send the form data to the backend if the value
    // format are valid.
    if(valid){  
      this.userservice.addPassword(value)
        // initialize switchExpression to redirect to success view
        // re initialize edit password form to empty fields
        .then(resp => { this.switchExpression = 'success'; this.add_password_form = new AddPasswordForm(new AddPasswordModel); this.checkPass = true; })
        .catch(err => { this.add_password_form.err = err.error.non_field_errors; });
    }
  }

  changePassClick($event){
    // prevent href default behavior
    $event.preventDefault();
    // initialize switchExpression to redirect to change password form 
    this.switchExpression = 'change_password';
  }

  cancelPasswordEvent(){
    // re initialize edit password and add password form to empty fields
    this.edit_password_form = new EditPasswordForm(new EditPasswordModel);
    this.add_password_form = new AddPasswordForm(new AddPasswordModel);
    // initialize switchExpression to redirect to default view
    this.switchExpression = '';
  }

  createPassClick(){
    // initialize switchExpression to redirect to create password form
    this.switchExpression = 'create_password';
  }
}
