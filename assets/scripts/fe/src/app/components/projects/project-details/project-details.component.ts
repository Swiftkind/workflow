import { Component, OnInit, HostListener } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';
import { b } from '@angular/core/src/render3';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  test_date;
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

    if ((!this.standupservice.noreload && this.state.$current.name !== 'project-details-report') || 
      (this.state.$current.name === 'project-details-report' && this.standupservice.q.length < 1)) 
    {
      // set date range parameters into today 
      this.standupservice.setDateRange()
      // get the project details
      this.standupservice.getProjectDetail(this.state.params.id)
      // get all weekly reports
      this.standupservice.getWeeklyReport(this.state.params.id)
      this.test_date = {
        'year': this.standupservice.wkStart.getFullYear(),
        'month': this.standupservice.wkStart.getMonth()
     }
    }
    else {
      // enable reload for template data
      this.standupservice.noreload = false;
    }

  }

  previousWeek($event){
    // prevent default action of href to redirect
    $event.preventDefault();

    // deduct 1 day to week start date to get previous week
    this.standupservice.wkStart.setDate(this.standupservice.wkStart.getDate() - 1)
    // apply computations to set new start and end week
    this.standupservice.setDateRange(this.standupservice.wkStart)

    // re-initialize Weekly Report data and query parameters
    this.standupservice.revertWeeklyReport()
    // get weekly report base on new week
    this.standupservice.getWeeklyReport(this.state.params.id)
  }

  nextWeek($event){
    // prevent default action of href to redirect
    $event.preventDefault()

    // add 1 day to week end date to get next week
    this.standupservice.wkEnd.setDate(this.standupservice.wkEnd.getDate() + 1)
    
    // apply computations to set new start and end week
    this.standupservice.setDateRange(this.standupservice.wkEnd)

    // re-initialize Weekly Report data and query parameters
    this.standupservice.revertWeeklyReport()

    // get weekly report base on new week
    this.standupservice.getWeeklyReport(this.state.params.id)
  }

  onDateSelect($event){
    // get the date time picker result
    let date = new Date($event.year + "-" + $event.month + "-" + $event.day)
    // apply computations to set new start and end week
    this.standupservice.setDateRange(date)
    // re-initialize Weekly Report data and query parameters
    this.standupservice.revertWeeklyReport()
    // get weekly report base on new week
    this.standupservice.getWeeklyReport(this.state.params.id)
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
      // load more weekly report once target height is reached
      this.standupservice.loadMoreWeeklyReport(this.state.params.id)
    }
  }
}
