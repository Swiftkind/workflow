import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { HISTORY_STANDUP, HISTORY_STANDUP_WEEKLY } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class StandupService {

  // contains the list of weekly reports
  public q = [];
  // boolean to check if currently getting new weekly report
  public fetching = false;
  // boolean to check if all data are loaded
  public allLoaded = false;
  // url parameter for the next page
  public qparams = {
    page: 1
  };
  // set so that when side panel is called it will not reload all data
  public noreload = false;

  //variables for getting and setting dates
  public dt :Date;
  public currentWeekDay :number;
  public lessDays :number;
  public wkStart :Date;
  public wkEnd :Date;

  constructor(
    private http: HttpClient
  ) { }

  getWeeklyReport(id) {
    // toggle fetching to true to prevent multiple
    // similar request to overload the server.
    this.fetching = true;

    // set string date format
    let weekStart = `${this.wkStart.getFullYear()}-${(this.wkStart.getMonth() + 1)}-${this.wkStart.getDate()}`

    // add url params
    let url = `${HISTORY_STANDUP_WEEKLY}${queryparams(this.qparams)}&date_start=${weekStart}&project_id=${id}`

    //this.http.get(urlsafe(url, weekStart) + queryparams(this.qparams))
    this.http.get(url)
      .toPromise()
      .then(resp => {
          // append the new data to the current data list.
          this.q = _.concat(this.q, resp['results']);

          // reset the fetching to false.
          this.fetching = false;

          // check if this request is the last request. by
          // checking if there is no value for the `next` attribute,
          // we will know that all the data are loaded.
          if(!resp['next']) { this.allLoaded = true; }
      })
    ;
  }

  loadMoreWeeklyReport(id) {
    // check if all the data are loaded.
    if (!this.allLoaded && !this.fetching) {
      // update the page number so that this will fetch
      // the next batch instead of the current one.
      // TODO: Add a checker if the the page_number is more than
      // the maximum page count.
      this.qparams.page++;

      // fetch weekly report items.
      this.getWeeklyReport(id);
    }
  }

  setDateRange(date = new Date()){
    // current date
    this.dt = date;

    // get the current day of the week
    this.currentWeekDay = this.dt.getDay();

    // get the how many days to be deducted 
    // 0 = Sunday 
    this.lessDays = this.currentWeekDay == 0 ? 6 : this.currentWeekDay - 1;
    // get the start of the week date
    this.wkStart = new Date(new Date(this.dt).setDate(this.dt.getDate() - this.lessDays));
    // get the end of the week date
    this.wkEnd = new Date(new Date(this.wkStart).setDate(this.wkStart.getDate() + 6));
  }

  revertWeeklyReport(){
    // remove all saved weekly report
    this.q = []
    // reset page parameter to page 1
    this.qparams.page = 1
    // reset all loaded boolean to allow user to scroll
    this.allLoaded = false
  }

  getReport(id) {
    return this.http.get(urlsafe(HISTORY_STANDUP, id));
  }

  getReportList() {
    return this.http.get(HISTORY_STANDUP);
  }
}
