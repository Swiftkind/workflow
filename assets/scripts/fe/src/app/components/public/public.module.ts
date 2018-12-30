import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';

import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIRouterModule
  ],
  declarations: [LoginComponent]
})
export class PublicModule { }
