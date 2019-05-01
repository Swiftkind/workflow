import { Component, OnInit } from '@angular/core';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  userReportList :any = [];

  constructor(
    private standupservice : StandupService,
    private nav            : NavService
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
  }

}
