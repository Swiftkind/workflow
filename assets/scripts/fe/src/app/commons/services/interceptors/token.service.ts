import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { StateService } from '@uirouter/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public currentUrl = window.location.pathname;
  constructor(
    private auth  : AuthService,
    private state : StateService
  ) { }

  intercept (r: HttpRequest<any>, n: HttpHandler) : Observable <HttpEvent <any>> {
    let req = r.clone({
      headers: r.headers.set('Authorization', this.token())
    });

    return n.handle(req).pipe(tap(
      resp => {
        /* Check every request if the user is authenticated, otherwise the user is redirected to the login page, 
           along with the url he/she tried to visit.
        */   
        this.auth.redirectUser(this.currentUrl); 
        if (resp instanceof HttpResponse) return resp;
      }
    ));
  }

  // Get user token from the local storage
  // and format if to be placed into the request header.
  token () {
    const t = _.get(this.auth.getToken(), ['token'], null);
    return `Token ${t}`;
  }
}
