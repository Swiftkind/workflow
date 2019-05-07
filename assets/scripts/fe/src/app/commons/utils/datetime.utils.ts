
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
