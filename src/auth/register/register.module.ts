import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// feature modules

// containers
import { RegisterComponent } from './containers/register/register.component';

// components

// routing
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [CommonModule, RegisterRoutingModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
