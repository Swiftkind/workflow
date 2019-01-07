import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe } from '../../utils/http.utils'
import { SLACKAUTH_CONFIG, SLACKAUTH_USER_TOKEN } from '../../constants/api.constants';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SlackService {
  public config;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  /* SLACK CONFIG
   * @desc : returns the slack auth configuration
   *         set from the backend.
   */
  getConfig() {
    return this.http.get(SLACKAUTH_CONFIG)
      .toPromise()
      .then(resp => { this.config=resp; return resp; })
    ;
  }

  /* USER TOKEN
   * @desc : Get user token using the slack token
   */
  getUserToken(slackToken) {
    return this.http.get(urlsafe(SLACKAUTH_USER_TOKEN, slackToken))
      .toPromise()
      .then(resp => { this.auth.setToken(resp); return resp; })
      .catch(err => { return Promise.reject(err); })
    ;
  }
}
