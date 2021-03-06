import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


// Class for edit password form
export class EditPasswordForm {
    public form: FormGroup;
    public err: string = null;
    public submitted: Boolean = false;
  
    constructor (data) {
      /* Initialize the form builder
       */
      this.form = new FormBuilder().group({
          old_password : new FormControl(null, [Validators.required]),
          new_password : new FormControl(null, [Validators.required]),
          confirm_new_password : new FormControl(null, [Validators.required])
      })
    }
  
    /* Check if form field is valid
     */
    valid (f) {
      return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    }
  
    /* Check if the form field has an error
     */
    hasError (f, e) {
      return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    }  
  }

// Class for add password form
export class AddPasswordForm {
    public form: FormGroup;
    public err: string = null;
    public submitted: Boolean = false;
  
    constructor (data) {
      /* Initialize the form builder
       */
      this.form = new FormBuilder().group({
          new_password : new FormControl(null, [Validators.required]),
          confirm_new_password : new FormControl(null, [Validators.required])
      })
    }
  
    /* Check if form field is valid
     */
    valid (f) {
      return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    }
  
    /* Check if the form field has an error
     */
    hasError (f, e) {
      return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    }
  
    
  }