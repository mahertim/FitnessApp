import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  styleUrls: ['auth-form.component.scss'],
  templateUrl: 'auth-form.component.html',
})
export class AuthFormComponent {
  @Output()
  submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    if (control) {
      return control.hasError('required') && control.touched;
    } else {
      return true;
    }
  }

  get emailFormat() {
    const control = this.form.get('email');
    if (control) {
      return control.hasError('email') && control.touched;
    } else {
      return true;
    }
  }
}
