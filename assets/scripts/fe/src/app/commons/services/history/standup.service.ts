import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { HISTORY_STANDUP } from '../../constants/api.constants';
import { Standup } from '../../models/history.models';


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

}
