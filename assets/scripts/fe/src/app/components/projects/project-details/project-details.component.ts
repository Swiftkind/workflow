import { Component, OnInit, HostListener } from '@angular/core';
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
  dt = new Date(); // current date of week

  currentWeekDay = this.dt.getDay();
  lessDays = this.currentWeekDay == 0 ? 6 : this.currentWeekDay - 1;
  wkStart = new Date(new Date(this.dt).setDate(this.dt.getDate() - this.lessDays));
  wkEnd = new Date(new Date(this.wkStart).setDate(this.wkStart.getDate() + 6));

  weekStart = this.wkStart.getFullYear() + "-" + (this.wkStart.getMonth() + 1) + "-" + this.wkStart.getDate()
  weekEnd = this.wkEnd.getFullYear() + "-" + (this.wkEnd.getMonth() + 1) + "-" + this.wkEnd.getDate()

  projectDetails:any = {};

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
    this.standupservice.getWeeklyReport(this.state.params.id, this.weekStart)
  }

  test_click_left($event){
    $event.preventDefault();
    this.wkStart.setDate(this.wkStart.getDate() - 1)
    this.computeDate(this.wkStart)
    this.standupservice.q = []
    this.standupservice.qparams.page = 1
    this.standupservice.all_loaded = false
    this.standupservice.getWeeklyReport(this.state.params.id, this.weekStart)
  }

  test_click_right($event){
    $event.preventDefault()
    this.wkEnd.setDate(this.wkEnd.getDate() + 1)
    this.computeDate(this.wkEnd)
    this.standupservice.q = []
    this.standupservice.qparams.page = 1
    this.standupservice.all_loaded = false
    this.standupservice.getWeeklyReport(this.state.params.id, this.weekEnd)
  }


  @HostListener('scroll', ['$event']) 
  scrollfeed(event): void {
    // captures the scroll event on the feed-section.
    // it handles the call to the backend when the scroll
    // reach its max height.
    let cHeight = event.target.scrollHeight;
    let scrollHeight = event.target.scrollTop;

    // offset height. this is the sum of the margin/interval
    // of each element inside the `cHeight`. can change based
    // on the design template.
    // margin-height: 708, spacing-height: 100 # spacer so that this
    // sends a call to the backend before the user reach the last item.
    let maxHeight = cHeight - (581 + 100);

    if(scrollHeight >= maxHeight) {
      this.standupservice.loadMoreWeeklyReport(this.state.params.id, this.weekStart)
    }
  }

  computeDate(new_date){

    this.dt = new_date;

    this.currentWeekDay = this.dt.getDay();
    this.lessDays = this.currentWeekDay == 0 ? 6 : this.currentWeekDay - 1;
    this.wkStart = new Date(new Date(this.dt).setDate(this.dt.getDate() - this.lessDays));
    this.wkEnd = new Date(new Date(this.wkStart).setDate(this.wkStart.getDate() + 6));
  
    this.weekStart = this.wkStart.getFullYear() + "-" + (this.wkStart.getMonth() + 1) + "-" + this.wkStart.getDate()
    this.weekEnd = this.wkEnd.getFullYear() + "-" + (this.wkEnd.getMonth() + 1) + "-" + this.wkEnd.getDate()
  }

}
