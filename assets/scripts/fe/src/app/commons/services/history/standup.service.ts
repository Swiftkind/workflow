import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { HISTORY_STANDUP, ACCOUNTING_PROJECT_DETAILS, HISTORY_STANDUP_WEEKLY } from '../../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class StandupService {

  constructor(
    private http: HttpClient
  ) { }

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
