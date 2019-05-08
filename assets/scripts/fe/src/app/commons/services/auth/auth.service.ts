import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StateService, UIRouter } from '@uirouter/angular';

import { AUTH_LOGIN, AUTH_USER } from '../../constants/api.constants';
import { AUTH_KEY } from '../../constants/conf.constants';
import { User } from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new User;

  constructor(
    private http: HttpClient,
    private state: StateService
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

  // LOGIN REDIRECT
  redirectUser(previousUrl){
    if(this.getToken() != null && previousUrl === '/'){ // authenticated user navigates to root url, redirects to dashboard
      return this.state.go('dashboard');
    }

    else if(this.getToken() != null){ // authenticated user navigates on authenticated page, redirects to that page.
      return this.state.go(previousUrl);
    }

    else if(previousUrl === '/login/'){
      return this.state.go('login');
    }

    return this.state.go('loginRedirect', {next: previousUrl}); // unauthenticatd user redirects to login page
  }

  redirectTo(url){ 
    // After authentication, if the user accessed the home domain, the user will be redirected to the dashboard
    if(url === "/" || url === "/login/" || url === undefined){
      return this.state.go('dashboard');
    }
        
    // If the user visited a authenticated page, after authentication, the user is redirected to that page.
    return this.state.go(url.replace(/\//g, ''))
    .then(res => {
      this.state.go(url); 
    })
    .catch(error => {
      this.state.go('dashboard'); 
    })
  }
}
