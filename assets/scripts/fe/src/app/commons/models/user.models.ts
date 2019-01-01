import { Plan, Deduction } from './payroll.models';

/* Model class for user
 */
export class User {
  id            : string = null;
  email         : string = null;
  first_name    : string = null;
  last_name     : string = null;
  birthdate     : string = null;
  image         : string = null;
  position      : string = null;
  position_type : string = null;
  date_started  : string = null;
  deductions    : Deduction[] = new Array<Deduction>();
  plans         : Plan[] = new Array<Plan>();

  constructor(data={}) {
    Object.assign(this, data);
  }
}