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
  private sending: Boolean = false;

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
    if (this.sending != true){
      this.sending = true;
      let count: number = 0;
      
      this.payrollservice.selectedPayroll.forEach((value: Payroll, key: string) => {
        // get file name
        const fileName = this.getFileName(value);
        // call the download functionality with parameters of item id and file name
        this.payrollservice.downloadPDF(key, fileName);
        //count iteration
        ++count;
        // on last iteration set sending to false
        // to let user download or send to email
        if(count == this.payrollservice.selectedPayroll.size){
          this.sending = false;
        }
      });
    }
  }

  getFileName(payrollValue){
    // Constructing the file name for the pdf
    const employeeName = `p${payrollValue.user.id}_${payrollValue.user.last_name}`;
    const datePhrase = this.datePipe.transform(`${payrollValue.date_from}`, "MM-dd-yy");

    return `${employeeName}_${datePhrase}`;;
  }


  sendPDF(){
    let keys = Array.from( this.payrollservice.mapCheckedPayroll.keys() );

    if (keys.length){
      // sendingEmail means that we have to disable the button
      this.sendingEmail = true;
      // Reset message if it's still sending
      this.emailCallbackMessage = "";
      this.payrollservice.sendPayrollReport(keys)
      .then(
        data => {
          console.log(data);
          this.sendPDFGeneralCallback();
          this.emailCallbackMessage = "Email is sent sucessfully.";
        }
      )
      .catch(
        errors => {
          console.log(errors);
          this.sendPDFGeneralCallback();
          this.emailCallbackMessage = "Something went wrong in sending the email!";
        }
      )
    }
  }

  sendPDFGeneralCallback(){
    // General clean up on call back
    this.sendingEmail = false;
  }
}