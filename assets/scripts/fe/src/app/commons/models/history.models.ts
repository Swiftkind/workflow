import { User } from './user.models';


/* Model class for standup
 */
export class Standup {
  id           : string = null;
  date_created : string = null;
  total_hours  : string = null;

  user         : User = new User;
  project      : Object = {};
  
  done         : Object[] = [];
  todo         : Object[] = [];
  blockers     : Object[] = [];

  constructor(data={}) {
      Object.assign(this, data);
  }
}