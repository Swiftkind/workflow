/* Model class for project detail.
 */
export class ProjectDetail {
    id              : string = null;
    name            : string = null;
    description     : string = null;
    channel_name    : string = null;
    date_created    : string = null;
    date_updated    : string = null;
  
    constructor (data={}) { 
      Object.assign(this, data);
    }
  }