import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { PayrollComponent } from './payroll/payroll.component';
import { PayrollListComponent } from './payroll-list/payroll-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule
  ],
  declarations: [PayrollComponent, PayrollListComponent]
})
export class PayrollModule { }
