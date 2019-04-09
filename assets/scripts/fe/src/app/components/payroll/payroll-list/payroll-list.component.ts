import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { PayrollService } from '../../../commons/services/payroll/payroll.service';
import { AuthService } from '../../../commons/services/auth/auth.service';
import { Payroll } from '../../../commons/models/payroll.models';


@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.css']
})
export class PayrollListComponent implements OnInit {

  constructor(
    private state          : StateService,
    private auth           : AuthService,
    private payrollservice : PayrollService
  ) {}

  ngOnInit() {
    // get the list of payrolls for the
    // authenticated user.
    if(!_.size(this.payrollservice.plist)) {
      this.payrollservice.getList();
    }
  }

}
