import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// feature modules
import { SharedModule } from '../shared/shared.module';

// containers
import { LoginComponent } from './containers/login/login.component';

// components

// routing
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
