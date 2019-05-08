import { PUBLIC_STATES } from '../../components/public/public.states';
import { USER_STATES } from '../../components/users/users.states';
import { PROJECTS_STATES } from '../../components/projects/projects.states';
import { PAYROLL_STATES } from '../../components/payroll/payroll.states';


export const APP_STATES = {
  otherwise : '/',
  states    : [].concat(
    PUBLIC_STATES, USER_STATES, PROJECTS_STATES, PAYROLL_STATES)
}