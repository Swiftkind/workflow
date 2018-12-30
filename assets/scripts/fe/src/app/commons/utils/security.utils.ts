import { AuthService } from '../services/auth/auth.service';


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

