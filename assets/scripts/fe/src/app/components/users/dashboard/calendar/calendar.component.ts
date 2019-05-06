import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

import { ServerService } from 'src/app/commons/services/auth/server.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  isCollapsed = true;

  month : number;
  year  : number;
  now   : Date;

  constructor(
    private server: ServerService
  ) {
    this.now    = this.server.now;
    this.month  = this.now.getMonth();
    this.year   = this.now.getFullYear();

    console.log(this.weeks);
   }

  ngOnInit() {
  }

  /**
   * Get today's date from `ServerService`.
   */
  get today(): number {
    return this.server.now.getDate();
  }

  get prevMonthLastDate() {
    return new Date(this.year, this.month, 0);
  }

  get prevMonthLastDateWeekIdx() {
    return this.prevMonthLastDate.getDate();
  }

  get currMonthFirstDate() {
    return new Date(this.year, this.month, 1);
  }

  get currMonthFirstDateWeekIdx() {
    return this.currMonthFirstDate.getDay();
  }

  get currMonthLastDate() {
    return new Date(this.year, this.month + 1, 0);
  }

  get currMonthLastDateWeekIdx() {
    return this.currMonthLastDate.getDay();
  }

  get nextMonthFirstDate() {
    return new Date(this.year, this.month + 1, 1);
  }

  get nextMonthFirstDateWeekIdx() {
    return this.nextMonthFirstDate.getDay();
  }

  get firstWeek() {
    const prevMonthDates = [];

    if (this.currMonthFirstDateWeekIdx !== 0) {
      _.times(this.currMonthFirstDateWeekIdx, (idx) => {
        prevMonthDates.push(new Date(this.year, this.month - 1, this.prevMonthLastDate.getDate() - idx ));
      });
      prevMonthDates.reverse();
    }

    return [...prevMonthDates, ...this.monthDates].slice(0, 7);
  }

  get lastWeek() {
    const nextMonthDates = [];

    if (this.currMonthLastDateWeekIdx !== 6) {
      _.times(6 - this.currMonthLastDateWeekIdx, (idx) => {
        nextMonthDates.push(new Date(this.year, this.month + 1, idx + 1 ));
      });
    }

    return [...this.monthDates, ...nextMonthDates].slice(this.monthDates.length - 6);
  }

  get monthDates() {
    const currMonthDates  = [];

    _.times(this.currMonthLastDate.getDate(), (idx) => {
      currMonthDates.push(new Date(this.year, this.month, idx + 1));
    });

    return currMonthDates;
  }

  get weeks() {
    const prevMonthShownDate = this.firstWeek.filter(date => date.getMonth() !== this.month);
    const nextMonthShownDate = this.lastWeek.filter(date => date.getMonth() !== this.month);

    return _.chunk([
      ...prevMonthShownDate,
      ...this.monthDates,
      ...nextMonthShownDate
    ], 7);
  }

}
