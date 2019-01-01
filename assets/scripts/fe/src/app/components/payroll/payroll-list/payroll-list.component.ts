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
  private plist : any = [];

  constructor(
    private state          : StateService,
    private auth           : AuthService,
    private payrollservice : PayrollService
  ) {
    console.log(state.params.id);
    console.log(this.auth.user);
  }

  ngOnInit() {
    // get the list of payrolls for the
    // authenticated user.
    this.payrollservice.getList();
  }

}
