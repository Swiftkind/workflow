import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectDetails:any = {
    stand_up:{
        'date_data':{
          'start_of_week':'',
          'end_of_week':''
        },
        'result':[{
          'blockers':[],
          'user':{
          'full_name':''
          }
        }]
      }
  };

  constructor(
    private standupservice : StandupService,
    private state          : StateService,
    private nav            : NavService,
    private http           : HttpClient
  ) 
  {
    // nav configuration
    // TODO: this sucks!. find a better solution
    this.nav.setNav('Project Details', true);
  }

  ngOnInit() {
    this.standupservice.getProjectDetails(this.state.params.id).subscribe(
      data => {
        this.projectDetails = data
      },
    )
  }

  test_click_left($event){
    $event.preventDefault();
    let data = {
      'project_id': this.projectDetails.id,
      'start_of_week':this.projectDetails.stand_up.date_data.start_of_week
    }
    this.standupservice.getWeeklyProjectReport(data).subscribe(
      data =>{
        this.projectDetails.stand_up = data
      },
    )
  }

  test_click_right($event){
    $event.preventDefault();
    let data = {
      'project_id': this.projectDetails.id,
      'end_of_week':this.projectDetails.stand_up.date_data.end_of_week
    }
    this.standupservice.getWeeklyProjectReport(data).subscribe(
      data =>{
        this.projectDetails.stand_up = data
      },
    )
  }

}
