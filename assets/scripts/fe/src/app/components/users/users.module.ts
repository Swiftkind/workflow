import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRouterModule
  ],
  declarations: [DashboardComponent, SettingComponent]
})
export class UsersModule { }
