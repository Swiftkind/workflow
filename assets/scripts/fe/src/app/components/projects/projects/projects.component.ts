import { Component, OnInit } from '@angular/core';
import { StandupService } from '../../../commons/services/history/standup.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  userReportList :any = [];

  constructor(
    private standupservice : StandupService
  ) { }

  ngOnInit() {
    // get all the reports of user
    this.standupservice.getReportList().subscribe(
      data => {
        this.userReportList = data;
      }
    )
  }

}
