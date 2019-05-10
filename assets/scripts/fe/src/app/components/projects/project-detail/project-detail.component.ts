import { Component, OnInit, HostListener } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { StandupService } from '../../../commons/services/history/standup.service'
import { NavService } from '../../../commons/services/utils/nav.service';
import { ProjectService } from '../../../commons/services/project/project.service'

import { DateRange, GetPreviousDate, GetMonthFirstLastDate } from '../../../commons/utils/datetime.utils'

//import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ServerService } from '../../../commons/services/auth/server.service';

import {NgbDate,NgbDateParserFormatter, NgbDateStruct, NgbDatepickerI18n, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  withdate:boolean = false;

  constructor(
    private projectservice : ProjectService,
    private standupservice : StandupService,
    private state          : StateService,
    private nav            : NavService,
    private calendar   : NgbCalendar,

  ) 
  {
    // nav configuration
    // TODO: this sucks!. find a better solution
    this.nav.setNav('Project Detail', true);

    //this.datenow = this.server.now
    this.fromDate = calendar.getToday();
  }

  ngOnInit() {

    if ((!this.standupservice.noreload && this.state.$current.name !== 'project-detail-report') || 
      (this.state.$current.name === 'project-detail-report' && this.standupservice.q.length < 1)) 
    {
      // set date range parameters into today
      this.standupservice.dateData = DateRange()
      // clear all fields
      this.standupservice.revertWeeklyReport()
      // get the project detail
      this.projectservice.getProjectDetail(this.state.params.id)
      // get all blockers of project
      this.projectservice.getProjectBlockers(this.state.params.id)
      // get all weekly reports
      this.standupservice.getWeeklyReport(this.state.params.id)
    }
    else {
      // enable reload for template data
      this.standupservice.noreload = false;
    }
  }

  updateWeeklyReport(){
    // re-initialize Weekly Report data and query parameters
    this.standupservice.revertWeeklyReport()
    // get weekly report base on new week
    this.standupservice.getWeeklyReport(this.state.params.id)
  }

  previousWeek($event){
    // prevent default action of href to redirect
    $event.preventDefault();
    // deduct 1 day to week start date to get previous week
    this.standupservice.dateData.dateStart.setDate(this.standupservice.dateData.dateStart.getDate() - 1)
    // apply computations to set new start and end week
    this.standupservice.dateData = DateRange(this.standupservice.dateData.dateStart)

    this.updateWeeklyReport()
  }

  nextWeek($event){
    // prevent default action of href to redirect
    $event.preventDefault()
    // add 1 day to week end date to get next week
    this.standupservice.dateData.dateEnd.setDate(this.standupservice.dateData.dateEnd.getDate() + 1)
    // apply computations to set new start and end week
    this.standupservice.dateData = DateRange(this.standupservice.dateData.dateEnd)

    this.updateWeeklyReport()
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && (date.after(this.fromDate) || date.equals(this.fromDate))) {
      this.toDate = date;
      this.withdate = true
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.withdate = false
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ApplyChanges($event){
    this.standupservice.setDateData(this.fromDate, this.toDate)

    // re-initialize Weekly Report data and query parameters
    this.updateWeeklyReport()
  }

  PreviousClick($event, interval){
    this.toDate = this.calendar.getToday()
    let convertdate:Date = GetPreviousDate(this.toDate, interval)
    this.fromDate = new NgbDate(convertdate.getFullYear(), (convertdate.getMonth() + 1), convertdate.getDate())
    
    this.withdate = false
    if(interval == 1)
    {
      this.standupservice.setDateData(this.fromDate, this.fromDate)
      this.toDate = new NgbDate(convertdate.getFullYear(), (convertdate.getMonth() + 1), convertdate.getDate())
    }
    else{
      this.standupservice.setDateData(this.fromDate, this.toDate)
    }
    
    // re-initialize Weekly Report data and query parameters
    this.updateWeeklyReport()
  }

  ByMonth($event, interval){
    this.fromDate = this.calendar.getToday()

    let cont = GetMonthFirstLastDate(this.fromDate, interval)
    
    this.fromDate = new NgbDate(cont.firstOfMonth.getFullYear(), (cont.firstOfMonth.getMonth() + 1), cont.firstOfMonth.getDate())
    this.toDate = new NgbDate(cont.lastOfMonth.getFullYear(), (cont.lastOfMonth.getMonth() + 1), cont.lastOfMonth.getDate())

    this.standupservice.setDateData(this.fromDate, this.toDate)
    // re-initialize Weekly Report data and query parameters
    this.updateWeeklyReport()
  }

  @HostListener('scroll', ['$event']) 
  scrollWeeklyReport(event): void {
    // captures the scroll event on the WeeklyReport-section.
    // it handles the call to the backend when the scroll
    // reach its max height.
    let cHeight = event.target.scrollHeight;
    this.standupservice.scrollHeight = event.target.scrollTop;

    // offset height. this is the sum of the margin/interval
    // of each element inside the `cHeight`. can change based
    // on the design template.
    // margin-height: 581, spacing-height: 100 # spacer so that this
    // sends a call to the backend before the user reach the last item.
    let maxHeight = cHeight - (581 + 100);

    if(this.standupservice.scrollHeight >= maxHeight) {
      // load more weekly report once target height is reached
      this.standupservice.loadMoreWeeklyReport(this.state.params.id)
    }
  }

}
