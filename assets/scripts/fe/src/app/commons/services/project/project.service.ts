import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe } from '../../utils/http.utils';
import { ACCOUNTING_PROJECT_DETAILS, HISTORY_PROJECT} from '../../constants/api.constants';

import { ProjectDetail } from '../../../commons/models/project-detail.models';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }
  
  // contains the project blockers
  public ProjectBlockers:any = [];
  // contains the project detail
  public projectDetail = new ProjectDetail;

  getProjectDetail(id){
    this.http.get(urlsafe(ACCOUNTING_PROJECT_DETAILS, id)).subscribe(
      data => {
        // set the project detail data
        this.projectDetail = new ProjectDetail(data)
      }
    );
  }

  getProjectBlockers(id){
    let url = urlsafe(HISTORY_PROJECT, id)

    this.http.get(urlsafe(url, 'blockers')).subscribe(
      data => {
        // get all blockers in opened project
        this.ProjectBlockers = data
      }
    )
  }
}
