import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { PayrollService } from '../../../commons/services/payroll/payroll.service';
import { AuthService } from '../../../commons/services/auth/auth.service';
import { Payroll } from '../../../commons/models/payroll.models';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.css']
})
export class PayrollListComponent implements OnInit {
  
  private payroll = new Payroll;

  constructor(
    private state          : StateService,
    private auth           : AuthService,
    private payrollservice : PayrollService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    // get the list of payrolls for the
    // authenticated user.
    if(!_.size(this.payrollservice.plist)) {
      this.payrollservice.getList();
    }
  }

  onToggle(item){
    // Function trigger upon checkbox toggle

    // Checks if item is already exist in selectedPayroll 
    if(this.payrollservice.selectedPayroll.has(item.id)){
      // if item is exist. Remove it from mapped data
      this.payrollservice.selectedPayroll.delete(item.id);
    }
    else{
      // else, add the item to mapped data
      this.payrollservice.selectedPayroll.set(item.id, item)
    }
  }

  downloadPDF(){
    // loops over each item of the mapped data
    this.payrollservice.selectedPayroll.forEach((value: Payroll, key: string) => {
      // get file name
      const file_name = this.getFileName(value);
      // call the download functionality with parameters of item id and file name
      this.payrollservice.downloadPDF(key, file_name);
    });
  }

  getFileName(payrollValue){
    // Constructing the file name for the pdf
    const employee_name = `p${payrollValue.user.id}_${payrollValue.user.last_name}`;
    const date_phrase = this.datePipe.transform(`${payrollValue.date_from}`, "MM-dd-yy");

    return `${employee_name}_${date_phrase}`;;
  }
}
