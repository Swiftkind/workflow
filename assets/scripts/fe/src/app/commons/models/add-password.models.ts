
/* Model class for addPassword
 */
export class AddPasswordModel {
    new_password : string = null;
    confirm_new_password : string = null;
  
    constructor(data={}) {
        Object.assign(this, data);
    }
  }