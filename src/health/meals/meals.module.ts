import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { MealsComponent } from './containers/meals/meals.component';

// components

// routing
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MealsRoutingModule],
  declarations: [MealsComponent],
})
export class MealsModule {}
