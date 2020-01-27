import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// feature modules
import { SharedModule } from '../shared/shared.module';

// containers
import { RegisterComponent } from './containers/register/register.component';

// components

// routing
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [CommonModule, RegisterRoutingModule, SharedModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
