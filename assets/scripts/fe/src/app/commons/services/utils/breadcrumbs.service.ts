import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  public breadcrumb : Object = [{
    title  : null,
    path : null,
  }];

  constructor() { }

  setBreadCrumbs(crumbs) {
    this.breadcrumb = crumbs
  }
}
