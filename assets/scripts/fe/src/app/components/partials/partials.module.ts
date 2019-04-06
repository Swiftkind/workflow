import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { DirectivesModule } from '../../commons/directives/directives.module';

import { NavigationComponent } from './navigation/navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule,
    DirectivesModule
  ],
  declarations: [NavigationComponent, SideMenuComponent]
})
export class PartialsModule { }
