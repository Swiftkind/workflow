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
  
  private payroll = new Payroll;

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

  onToggle(item){
    // Function trigger upon checkbox toggle

    // Checks if item is already exist in mapDownloadPDF 
    if(this.payrollservice.mapDownloadPDF.has(item.id)){
      // if item is exist. Remove it from mapped data
      this.payrollservice.mapDownloadPDF.delete(item.id);
    }
    else{
      // else, add the item to mapped data
      this.payrollservice.mapDownloadPDF.set(item.id, item)
    } 
  }

  downloadPDF(){
    // loops over each item of the mapped data
    this.payrollservice.mapDownloadPDF.forEach((value: boolean, key: string) => {
      // get file name
      const file_name = this.getFileName(value);
      // call the download functionality with parameters of item id and file name
      this.payrollservice.downloadPDF(key, file_name);
    });
  }

  getFileName(payrollValue){
    // Constructing the file name for the pdf
    const report_phrase = `${payrollValue.date_from} to ${payrollValue.date_to}`;
    const date_phrase = `${payrollValue.date_from} to ${payrollValue.date_to}`;
    const employee_name = `${payrollValue.user.first_name} to ${payrollValue.user.last_name}`;
    const file_name = `payroll of ${employee_name} ${report_phrase}`;
    return `payroll of ${employee_name} ${date_phrase}`;;
  }
}
