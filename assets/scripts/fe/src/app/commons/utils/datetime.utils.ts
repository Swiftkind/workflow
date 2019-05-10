import * as _ from 'lodash';

import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export function DateRange (date:Date = new Date) {
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

export function GetPreviousDate(date:NgbDate, interval:number){
    let convertedDate = new Date(`${date.year}-${date.month}-${date.day}`)
    let intervalDate = new Date(new Date(convertedDate).setDate(convertedDate.getDate() - interval))

    return intervalDate
}

export function GetMonthFirstLastDate(date:NgbDate, interval:number){
    var convertedDate = new Date(`${date.year}-${date.month}-${date.day}`)
    var intervalDate = new Date(new Date(convertedDate).setMonth(convertedDate.getMonth() - interval))

    var firstOfMonth = new Date(intervalDate.getFullYear(), intervalDate.getMonth(), 1);
    var lastOfMonth = new Date(intervalDate.getFullYear(), intervalDate.getMonth()+1, 0);

    var MonthFirstLastDate = { 
        'firstOfMonth':firstOfMonth, 
        'lastOfMonth':lastOfMonth 
    }

    return MonthFirstLastDate
}

export function ConvertFromNgbDate(date:NgbDate){
    return new Date(date.year, date.month-1, date.day);
}