import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { PAYROLL, PAYROLL_REPORT, PAYROLL_SEND_PDF } from '../../constants/api.constants';
import { Payroll } from '../../../commons/models/payroll.models';

import { downloadFileHanlder } from '../../utils/file.utils';
import { text } from '@angular/core/src/render3/instructions';


@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  public plist : any = [];
  public selectedPayroll = new Map<string,Payroll>();
  public payroll = new Payroll;

  constructor(
    private http           : HttpClient,
    private payrollservice : PayrollService
  ) { }

  /* Payroll detail
   */
  detail(id) {
    return this.http.get(urlsafe(PAYROLL, id));
  }

  /* Payroll list
   */
  list(params={}) {
    return this.http.get(PAYROLL + queryparams(params));
  }

  getList() {
    this.list()
      .subscribe(resp=>{ this.plist = resp; });
  }

  downloadPDF(id, fileName = "default"){
    /* Automatically download the pdf 
    */

   // instead of using a simple redirection to download the request.
   //  Use a get request so that the inteceptors can catch it and attach token. 

   this.http.get(PAYROLL_REPORT(id), { responseType: 'blob'})
     .subscribe(
       data => { downloadFileHanlder(data, fileName) }
     )
  }
  
  // sendPayrollReport(id){
  //   return this.http.post(PAYROLL_REPORT(id), null)
  //   .toPromise()
  //   .then(resp => { return resp; })
  //   .catch(err => { return Promise.reject(err); });
  // }

  sendPayrollReport(data){
    return this.http.post(PAYROLL_SEND_PDF, data)
    .toPromise()
    .then(resp => { return resp; })
    .catch(err => { return Promise.reject(err); });
  }
} 
