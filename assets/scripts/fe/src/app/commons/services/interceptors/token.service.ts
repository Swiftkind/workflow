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
        if (resp instanceof HttpResponse) return resp;
      },
      err => {
        if (err instanceof HttpErrorResponse) this.authenticate();
      }
    ));
  }

  // Get user token from the local storage
  // and format if to be placed into the request header.
  token () {
    const t = _.get(this.auth.getToken(), ['token'], null);
    return `Token ${t}`;
  }

  // Remove expired token. redirect the user to the login
  // page and re-authenticate.
  authenticate () {
    this.auth.rmToken();
    this.state.go('login');
  }

}
