import { PUBLIC_STATES } from '../../components/public/public.states';
import { USER_STATES } from '../../components/users/users.states';


export const APP_STATES = {
  otherwise : '/',
  states    : [].concat(PUBLIC_STATES, USER_STATES)
}