import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
