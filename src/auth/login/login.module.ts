import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// feature modules

// containers
import { LoginComponent } from './containers/login/login.component';

// components

// routing
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
