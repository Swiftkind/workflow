export class Feed {
  instance : Object = {};
  instance_type : string = null;

  constructor(data={}) {
    Object.assign(this, data);
  }
}