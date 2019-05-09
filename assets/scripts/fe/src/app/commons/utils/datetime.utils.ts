import * as _ from 'lodash';


export function DateRange (date = new Date) {
    var dt = date;
    var currentWeekDay = dt.getDay();

    var lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1;

    // get the start of the week date
    var wkStart = new Date(new Date(dt).setDate(dt.getDate() - lessDays));
    // get the end of the week date
    var wkEnd = new Date(new Date(wkStart).setDate(wkStart.getDate() + 6));

    var dateRange = {
        'dateStart': wkStart,
        'dateEnd': wkEnd
    }
    return dateRange
}


// export function today(date = new Date): number {
//     return date.getDate();
//   }

// export function prevMonthLastDate(date = new Date): Date {
//     return new Date(date.getFullYear(), date.getMonth(), 0);
//   }

// export function currMonthFirstDate(date = new Date): Date {
//     return new Date(date.getFullYear(), date.getMonth(), 1);
//   }

// export function currMonthLastDate(date = new Date): Date {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0);
//   }

//   /**
//    * Get current month's firstweek including prev month's idle dates.
//    */
// export function firstWeek(first_day, last_date, date = new Date): Array<Date> {
//     const currMonthFirstDateWeekIdx = first_day;
//     const prevMonth                 = date.getMonth() - 1;
//     const prevMonthDatesCount       = currMonthFirstDateWeekIdx;
//     const prevMonthDates            = [];

//     // Check if the current month's first date is not monday
//     // If true, push prev month dates to prevMonthDates array.
//     if (currMonthFirstDateWeekIdx !== 0) {
//       _.times(prevMonthDatesCount, (idx) => {
//         const prevMonthDate = last_date - idx;
//         prevMonthDates.push(new Date(date.getFullYear(), prevMonth, prevMonthDate));
//       });

//       // Reverse the array since we started pushing from
//       // prevMonthLastDate backwards.
//       prevMonthDates.reverse();
//     }

//     // Combine prev month dates and current month dates
//     // then return only the first 7 dates as the first week.
//     return [...prevMonthDates, ...this.currMonthDates].slice(0, 7);
//   }

//   /**
//    * Get current month's lastweek including next month's idle dates.
//    */
// export function lastWeek(date = new Date): Array<Date> {
//     const currMonthLastDateWeekIdx = this.currMonthLastDate.getDay();
//     const nextMonth                = date.getMonth() + 1;
//     const nextMonthDatesCount      = 6 - currMonthLastDateWeekIdx;
//     const nextMonthDates           = [];

//     // Check if the current month's last date is not saturday
//     // If true, push next month dates to nextMonthDates array.
//     if (currMonthLastDateWeekIdx !== 6) {
//       _.times(nextMonthDatesCount, (idx) => {
//         const nextMonthDate = idx + 1;
//         nextMonthDates.push(new Date(date.getFullYear(), nextMonth, nextMonthDate));
//       });
//     }

//     // Combine next month dates and current month dates
//     // then return only the last 7 dates as the last week.
//     return [...this.currMonthDates, ...nextMonthDates].slice(this.currMonthDates.length - 6);
//   }

//   /**
//    * Get current month's dates not including idle dates.
//    */
// export function currMonthDates(last_date, dateToday = new Date): Array<Date> {
//     const datesCount = last_date;
//     const dates      = [];

//     // Push current month dates into dates array.
//     _.times(datesCount, (idx) => {
//       const date = idx + 1;
//       dates.push(new Date(dateToday.getFullYear(), dateToday.getMonth(), date));
//     });

//     return dates;
//   }

//   /**
//    * Get currnent month's dates divided into several weeks
//    * 7 dates per week.
//    */
// export function weeks(date = new Date): Array<Date> {
//     const prevMonthShownDate = this.firstWeek.filter(dt => dt.getMonth() !== date.getMonth());
//     const nextMonthShownDate = this.lastWeek.filter(dt => dt.getMonth() !== date.getMonth());

//     return _.chunk([
//       ...prevMonthShownDate,
//       ...this.currMonthDates,
//       ...nextMonthShownDate
//     ], 7);
//   }

// export function getDateClass(date: Date): {'idleDay': boolean, 'today': boolean} {
//     let dt = new Date
//     return {
//       'idleDay': date.getMonth() !== dt.getMonth(),
//       'today': date.getDate() === this.today
//     };
//   }