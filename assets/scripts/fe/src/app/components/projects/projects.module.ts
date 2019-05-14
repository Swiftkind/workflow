import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UIRouterModule } from '@uirouter/angular';
import { PipesModule } from '../../commons/pipes/pipes.module';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule,
    PipesModule
  ],
  declarations: [ProjectsComponent, ProjectDetailComponent]
})
export class ProjectsModule { }
