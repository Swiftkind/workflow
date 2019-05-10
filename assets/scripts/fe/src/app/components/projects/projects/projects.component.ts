import { Component, OnInit } from '@angular/core';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';
import { ProjectService } from '../../../commons/services/project/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  userReportList :any = [];

  constructor(
    private standupservice : StandupService,
    private nav            : NavService,
    private projectservice : ProjectService
  ) 
  { 
    this.nav.setNav('Projects', true);
  }

  ngOnInit() {
    // get all the reports of user
    this.standupservice.getReportList().subscribe(
      data => {
        this.userReportList = data;
      }
    )

    this.projectservice.getProjects().subscribe(
      data => {
        this.projectservice.projects = data
        console.log(data)
      }
    )
  }

}
