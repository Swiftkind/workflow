import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe } from '../../utils/http.utils';
import { ACCOUNTING_PROJECT, HISTORY_PROJECT} from '../../constants/api.constants';

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
  // contains all projects
  public projects:any = [];

  getProjects(){
    return this.http.get(ACCOUNTING_PROJECT)
  }

  getProjectDetail(id){
    return this.http.get(urlsafe(ACCOUNTING_PROJECT, id))
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
