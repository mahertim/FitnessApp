import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// feature modules

// containers
import { AuthFormComponent } from './components/auth-form/auth-form.component';

// components

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
})
export class SharedModule {}
