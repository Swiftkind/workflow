/* Model class for signing in.
 */
export class Login {
  email    : string = null;
  password : string = null;

  constructor (data={}) { 
    Object.assign(this, data);
  }
}