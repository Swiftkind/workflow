import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UIRouterModule } from '@uirouter/angular';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule
  ],
  declarations: [ProjectsComponent, ProjectDetailsComponent]
})
export class ProjectsModule { }
