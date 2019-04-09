import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public config : Object = {
    title  : null,
    expand : false
  };

  constructor() { }

  setNav(title, expand=false) {
    this.config = Object({
      title: title, expand: expand
    });
  }
}
