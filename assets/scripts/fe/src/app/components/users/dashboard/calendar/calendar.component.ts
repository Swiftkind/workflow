import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

import { ServerService } from 'src/app/commons/services/auth/server.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  isCollapsed : boolean;
  month       : number;
  year        : number;
  now         : Date;

  constructor(
    private server: ServerService
  ) {
    this.isCollapsed = true;
    this.now         = this.server.now;
    this.month       = this.now.getMonth();
    this.year        = this.now.getFullYear();
  }

  ngOnInit() {
  }

  get today(): number {
    return this.server.now.getDate();
  }

  get prevMonthLastDate(): Date {
    return new Date(this.year, this.month, 0);
  }

  get currMonthFirstDate(): Date {
    return new Date(this.year, this.month, 1);
  }

  get currMonthLastDate(): Date {
    return new Date(this.year, this.month + 1, 0);
  }

  /**
   * Get current month's firstweek including prev month's idle dates.
   */
  get firstWeek(): Array<Date> {
    const currMonthFirstDateWeekIdx = this.currMonthFirstDate.getDay();
    const prevMonth                 = this.month - 1;
    const prevMonthDatesCount       = currMonthFirstDateWeekIdx;
    const prevMonthDates            = [];

    // Check if the current month's first date is not monday
    // If true, push prev month dates to prevMonthDates array.
    if (currMonthFirstDateWeekIdx !== 0) {
      _.times(prevMonthDatesCount, (idx) => {
        const prevMonthDate = this.prevMonthLastDate.getDate() - idx;
        prevMonthDates.push(new Date(this.year, prevMonth, prevMonthDate));
      });

      // Reverse the array since we started pushing from
      // prevMonthLastDate backwards.
      prevMonthDates.reverse();
    }

    // Combine prev month dates and current month dates
    // then return only the first 7 dates as the first week.
    return [...prevMonthDates, ...this.currMonthDates].slice(0, 7);
  }

  /**
   * Get current month's lastweek including next month's idle dates.
   */
  get lastWeek(): Array<Date> {
    const currMonthLastDateWeekIdx = this.currMonthLastDate.getDay();
    const nextMonth                = this.month + 1;
    const nextMonthDatesCount      = 6 - currMonthLastDateWeekIdx;
    const nextMonthDates           = [];

    // Check if the current month's last date is not saturday
    // If true, push next month dates to nextMonthDates array.
    if (currMonthLastDateWeekIdx !== 6) {
      _.times(nextMonthDatesCount, (idx) => {
        const nextMonthDate = idx + 1;
        nextMonthDates.push(new Date(this.year, nextMonth, nextMonthDate));
      });
    }

    // Combine next month dates and current month dates
    // then return only the last 7 dates as the last week.
    return [...this.currMonthDates, ...nextMonthDates].slice(this.currMonthDates.length - 6);
  }

  /**
   * Get current month's dates not including idle dates.
   */
  get currMonthDates(): Array<Date> {
    const datesCount = this.currMonthLastDate.getDate();
    const dates      = [];

    // Push current month dates into dates array.
    _.times(datesCount, (idx) => {
      const date = idx + 1;
      dates.push(new Date(this.year, this.month, date));
    });

    return dates;
  }

  /**
   * Get currnent month's dates divided into several weeks
   * 7 dates per week.
   */
  get weeks(): Array<Date> {
    const prevMonthShownDate = this.firstWeek.filter(date => date.getMonth() !== this.month);
    const nextMonthShownDate = this.lastWeek.filter(date => date.getMonth() !== this.month);

    return _.chunk([
      ...prevMonthShownDate,
      ...this.currMonthDates,
      ...nextMonthShownDate
    ], 7);
  }

  /**
   * @summary Generate object of css classes for a `date`
   * @param date Insatance of Date;
   * @description Can be use for ngClass directive
   */
  getDateClass(date: Date): {'idleDay': boolean, 'today': boolean} {
    return {
      'idleDay': date.getMonth() !== this.month,
      'today': date.getDate() === this.today
    };
  }

}
