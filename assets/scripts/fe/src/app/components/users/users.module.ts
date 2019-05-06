import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { DirectivesModule } from '../../commons/directives/directives.module';

import { PipesModule } from '../../commons/pipes/pipes.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { SideReportComponent } from './dashboard/side-report/side-report.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    UIRouterModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [DashboardComponent, SettingComponent, SideReportComponent, CalendarComponent]
})
export class UsersModule { }
