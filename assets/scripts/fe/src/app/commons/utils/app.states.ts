import { PUBLIC_STATES } from '../../components/public/public.states';
import { USER_STATES } from '../../components/users/users.states';
import { PROJECTS_STATES } from '../../components/projects/projects.states';
import { PAYROLL_STATES } from '../../components/payroll/payroll.states';

// import { HomeRedirect } from '../utils/security.utils';

export const APP_STATES = {
  otherwise : '/dashboard/', // goes to dashboard if the user is authenticated, otherwise redirect to login.
  states    : [].concat(
    PUBLIC_STATES, USER_STATES, PROJECTS_STATES, PAYROLL_STATES)
}