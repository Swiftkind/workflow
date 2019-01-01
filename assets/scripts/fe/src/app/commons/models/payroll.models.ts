import { User } from './user.models';


/* Model class for plan
 */
export class Plan {
  id             : string = null;
  name           : string = null;
  amount         : string = null;
  term           : string = null;
  monthly_ammort : string = null;
  payment_count  : string = null;
  date_from      : string = null;
  date_to        : string = null;
  date_created   : string = null;
  date_updated   : string = null;

  constructor(data={}) {
    Object.assign(this, data);
  }
}

/* Model class for deduction
 */
export class Deduction {
  name         : string = null;
  description  : string = null;
  tier         : string = null;
  amount       : string = null;
  er           : string = null;
  ee           : string = null;
  date_created : string = null;
  date_updated : string = null;

  constructor(data={}) {
    Object.assign(this, data);
  }
}

/* Model class for payroll
 */
export class Payroll {
  id              : string = null;
  user            : User = new User;
  date_from       : string = null;
  date_to         : string = null;
  total_deduction : string = null;
  gross_pay       : string = null;
  net_pay         : string = null;
  date_created    : string = null;
  date_updated    : string = null;

  constructor(data={}) {
    Object.assign(this, data);
  }
}
