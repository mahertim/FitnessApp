import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// feature modules

// containers

// components

// routing
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
