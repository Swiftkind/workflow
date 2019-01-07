import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AUTH_LOGIN, AUTH_USER } from '../../constants/api.constants';
import { AUTH_KEY } from '../../constants/conf.constants';
import { User } from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new User;

  constructor(
    private http: HttpClient
  ) { }


  /* USER LOGIN
   * @desc : sends a request to the backend server to
   *         to check for the credentials and returns
   *         a generated token.
   */
  login(creds) {
    return this.http.post(AUTH_LOGIN, creds)
      .toPromise()
      .then(resp => { this.setToken(resp); return resp; })
      .catch(err => { return Promise.reject(err); })
    ;
  }

  /* MANAGE USER TOKEN
   * @desc : manage user token generated from the backend
   *         to be used on authenticated requests
   */
  setToken(token) {
    // save the generated token to the local storage
    (<any>window).localStorage[AUTH_KEY] = JSON.stringify(token);
    return;
  }

  getToken() {
    // fetch the generated token from the storage
    let d = (<any>window).localStorage[AUTH_KEY];
    if (!d) return null;

    return JSON.parse(d);
  }

  rmToken() {
    // clear the token from the local storage.
    (<any>window).localStorage.removeItem(AUTH_KEY);
  }


  /* MANAGE USER INSTANCE
   * @desc : manage user instance.
   */
  authenticated() {
    // check if the user is authenticated
    return this.getToken() ? true : false;
  }

  setuser() {
    // save the user's instance
    return this.http.get(AUTH_USER)
      .toPromise()
      .then(resp => { this.user=new User(resp); })
    ;
  }

  getuser() {
    // fetch the user instance
    if (this.user.id == null) {
      // sends a request from the backend to
      // get the data.
      this.setuser();
    }
    return this.user;
  }
}
