import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { UserForm } from '../../../commons/forms/user.forms';
import { User } from '../../../commons/models/user.models';

import { EditPasswordForm } from '../../../commons/forms/edit-password.forms'
import { EditPasswordModel } from '../../../commons/models/edit-password.models'

import { AddPasswordForm } from '../../../commons/forms/add-password.forms'
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

  private edit_password_form : EditPasswordForm
  private add_password_form : AddPasswordForm
  checkPass;
  switch_expression;


  constructor(
    private auth  : AuthService,
    private state : StateService,
    private userservice : UserService,
    private nav : NavService
  ) {}

  async ngOnInit() {
    // initialize the form.
    this.switch_expression = null
    this.form = new UserForm(new User);

    this.nav.setNav('Profile', true);

    this.edit_password_form = new EditPasswordForm(new EditPasswordModel)
    this.add_password_form = new AddPasswordForm(new AddPasswordModel)

    // check if user has a usable password
    this.userservice.hasPass().subscribe(
      data => {
        this.checkPass = data
      },
      error => {
        console.log(error)
      }
    )

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

  onEditPasswordSubmit({value, valid}: {value: EditPasswordModel, valid:boolean}){
    this.edit_password_form.submitted = true;

    if(valid){
      this.userservice.updatePassword(value)
        .then(resp => { this.switch_expression = 'success'; this.edit_password_form = new EditPasswordForm(new EditPasswordModel); })
        .catch(err => { this.edit_password_form.err = err.error.non_field_errors; });
    }
  }

  onAddPasswordSubmit({value, valid}: {value: AddPasswordModel, valid:boolean}){
    this.add_password_form.submitted = true;

    if(valid){  
      this.userservice.addPassword(value)
        .then(resp => { this.switch_expression = 'success'; this.add_password_form = new AddPasswordForm(new AddPasswordModel); this.checkPass = true; })
        .catch(err => { this.add_password_form.err = err.error.non_field_errors; });
    }
  }

  changePassClick($event){
    $event.preventDefault()
    this.switch_expression = 'change_password'
  }

  cancelPasswordEvent(){
    this.edit_password_form = new EditPasswordForm(new EditPasswordModel);
    this.add_password_form = new AddPasswordForm(new AddPasswordModel);
    this.switch_expression = ''
  }

  createPassClick(){
    this.switch_expression = 'create_password'
  }
}
