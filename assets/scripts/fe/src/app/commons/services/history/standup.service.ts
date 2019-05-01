import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { HISTORY_STANDUP, ACCOUNTING_PROJECT_DETAILS, HISTORY_STANDUP_WEEKLY } from '../../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class StandupService {

  public q = [];
  public fetching = false;
  public all_loaded = false;
  public qparams = {
    page: 1
  };

  constructor(
    private http: HttpClient
  ) { }

  getWeeklyReport(id, passedDate) {
    // toggle fetching to true to prevent multiple
    // similar request to overload the server.
    this.fetching = true;
    let url = urlsafe(HISTORY_STANDUP_WEEKLY, id)
    this.http.get(urlsafe(url, passedDate) + queryparams(this.qparams))
      .toPromise()
      .then(resp => {
          // append the new data to the current data list.
          this.q = _.concat(this.q, resp['results']);

          // reset the fetching to false.
          this.fetching = false;

          // check if this request is the last request. by
          // checking if there is no value for the `next` attribute,
          // we will know that all the data are loaded.
          if(!resp['next']) { this.all_loaded = true; }
      })
    ;
  }

  loadMoreWeeklyReport(id, passedDate) {
    // check if all the data are loaded.
    if (!this.all_loaded && !this.fetching) {
      // update the page number so that this will fetch
      // the next batch instead of the current one.
      // TODO: Add a checker if the the page_number is more than
      // the maximum page count.
      this.qparams.page++;

      // fetch feed items.
      this.getWeeklyReport(id, passedDate);
    }
  }

  getReport(id) {
    return this.http.get(urlsafe(HISTORY_STANDUP, id));
  }

  getReportList() {
    return this.http.get(HISTORY_STANDUP);
  }

  getProjectDetails(id){
    return this.http.get(urlsafe(ACCOUNTING_PROJECT_DETAILS, id));
  }

  getWeeklyProjectReport(data){
    return this.http.put(HISTORY_STANDUP_WEEKLY, data)
  }
}
