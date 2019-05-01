import { Component, OnInit, HostListener } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';

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
  ) 
  {
    // nav configuration
    // TODO: this sucks!. find a better solution
    this.nav.setNav('Project Details', true);
  }

  ngOnInit() {
    // get the project details
    this.standupservice.getProjectDetails(this.state.params.id).subscribe(
      data => {
        this.projectDetails = data
      },
    )

    // get weekly reports based on project and current date
    this.standupservice.getWeeklyReport(this.state.params.id, this.weekStart)
  }

  previousWeek($event){
    // prevent default action of href to redirect
    $event.preventDefault();

    // deduct 1 day to week start date to get previous week
    this.wkStart.setDate(this.wkStart.getDate() - 1)
    // apply computations to set new start and end week
    this.computeDate(this.wkStart)

    // re-initialize Weekly Report data and query parameters
    this.revertWeeklyReport()
    // get weekly report base on new week
    this.standupservice.getWeeklyReport(this.state.params.id, this.weekStart)
  }

  nextWeek($event){
    // prevent default action of href to redirect
    $event.preventDefault()

    // add 1 day to week end date to get next week
    this.wkEnd.setDate(this.wkEnd.getDate() + 1)
    
    // apply computations to set new start and end week
    this.computeDate(this.wkEnd)

    // re-initialize Weekly Report data and query parameters
    this.revertWeeklyReport()

    // get weekly report base on new week
    this.standupservice.getWeeklyReport(this.state.params.id, this.weekEnd)
  }


  @HostListener('scroll', ['$event']) 
  scrollWeeklyReport(event): void {
    // captures the scroll event on the WeeklyReport-section.
    // it handles the call to the backend when the scroll
    // reach its max height.
    let cHeight = event.target.scrollHeight;
    let scrollHeight = event.target.scrollTop;

    // offset height. this is the sum of the margin/interval
    // of each element inside the `cHeight`. can change based
    // on the design template.
    // margin-height: 581, spacing-height: 100 # spacer so that this
    // sends a call to the backend before the user reach the last item.
    let maxHeight = cHeight - (581 + 100);

    if(scrollHeight >= maxHeight) {
      this.standupservice.loadMoreWeeklyReport(this.state.params.id, this.weekStart)
    }
  }

  // used to compute the new date range
  computeDate(new_date){

    // get the date passed
    this.dt = new_date;

    // get the current day of the week
    this.currentWeekDay = this.dt.getDay();
    // get the how many days to be deducted 
    // 0 = Sunday 
    this.lessDays = this.currentWeekDay == 0 ? 6 : this.currentWeekDay - 1;
    // get the start of the week date
    this.wkStart = new Date(new Date(this.dt).setDate(this.dt.getDate() - this.lessDays));
    // get the end of the week date
    this.wkEnd = new Date(new Date(this.wkStart).setDate(this.wkStart.getDate() + 6));

    // set the start and end week date to proper formatting
    this.weekStart = this.wkStart.getFullYear() + "-" + (this.wkStart.getMonth() + 1) + "-" + this.wkStart.getDate()
    this.weekEnd = this.wkEnd.getFullYear() + "-" + (this.wkEnd.getMonth() + 1) + "-" + this.wkEnd.getDate()
  }

  revertWeeklyReport(){
    // remove all saved weekly report
    this.standupservice.q = []
    // reset page parameter to page 1
    this.standupservice.qparams.page = 1
    // reset all loaded boolean to allow user to scroll
    this.standupservice.all_loaded = false
  }

}
