import { interval, Observable } from 'rxjs';  
import { map, share } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_STATUS } from '../../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  // current date and time observable.
  public currentdt: Observable<Date>;
  public now = new Date();

  constructor(
    private http: HttpClient
  ) {}

  /* SERVER STATUS
   * @desc : retrieve the server date time and status
   */
  getStatus() {
    return this.http.get(SERVER_STATUS)
      .toPromise()
      .then(resp => {
        // TODO: sync the server datetime and the current dt.
        let serverdt = new Date(resp['datetime']);

        // sync the datetime of the server and
        // the frontend service.
        this.currentdt = interval(1000).pipe(
          map(tick => new Date()), share()
        );
      });
  }

  _getCurrenDT(): Observable<Date> {
    return this.currentdt;
  }

  async syncServerDT() {
    // send a request to the backend server to get
    // the current date and time.
    // Note: `await` makes it synchronous.
    await this.getStatus();

    // sync to the current datetime.
    this._getCurrenDT().subscribe(resp => {
      this.now = new Date(resp);
    });
  }
}
