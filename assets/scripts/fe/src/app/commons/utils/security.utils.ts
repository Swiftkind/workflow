import * as _ from 'lodash';

import { AuthService } from '../services/auth/auth.service';
import { PayrollService } from '../services/payroll/payroll.service';


/* LOGIN REQUIRED
 * @desc : callback function that will check and will not pass
 *         users that are not logged in.
 */
export function LoginRequired(t) {
  let auth = t.injector().get(AuthService),
      state = t.router.stateService;

  if(!auth.authenticated()) return state.target('login');
}


/* DISCONNECT
 * @desc : callback function that will log user out.
 *         (removes/clear the user token)
 */
export function Disconnect(t) {
  let auth = t.injector().get(AuthService),
      state = t.router.stateService;

  if(auth.authenticated()) auth.rmToken();
  return state.target('login');
}


/* PAYROLL REDIRECT
 */
export async function PayrollRedirect(t) {
  let auth = t.injector().get(AuthService),
      payroll = t.injector().get(PayrollService),
      state = t.router.stateService;

  if(!auth.authenticated()) return state.target('login');

  // check if `payroll.plist` is not empty, redirect
  // the user to the first instance. If empty, get the
  // list from the backend and redirect to the first
  // instance.
  if(_.isEmpty(payroll.plist)) {
    // TODO: improve this part. it looks good but messy.
    // `payroll.plist` shouldn't be assigned in this function
    await payroll.list()
      .toPromise()
      .then(resp=>{ payroll.plist = resp; return resp; });
  }

  return state.target('payroll-detail', {id: payroll.plist[0].id});
}