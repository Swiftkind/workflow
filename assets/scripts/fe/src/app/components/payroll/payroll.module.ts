import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollComponent } from './payroll/payroll.component';
import { PayrollListComponent } from './payroll-list/payroll-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PayrollComponent, PayrollListComponent]
})
export class PayrollModule { }
