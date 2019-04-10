import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';
import { DirectivesModule } from '../../commons/directives/directives.module';

import { PipesModule } from '../../commons/pipes/pipes.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { SideReportComponent } from './dashboard/side-report/side-report.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRouterModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [DashboardComponent, SettingComponent, SideReportComponent]
})
export class UsersModule { }
