import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feed } from '../../models/feed.models';
import { FEED } from '../../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  public q;

  constructor(
    private http: HttpClient
  ) { }

  getFeed() {
    this.http.get(FEED)
      .toPromise()
      .then(resp => {
          this.q = resp;
      })
    ;
  }
}
