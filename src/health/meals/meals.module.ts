import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

// components
import { MealFormComponent } from './components/meal-form/meal-form.component';

// routing
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MealsRoutingModule],
  declarations: [MealsComponent, MealComponent, MealFormComponent],
})
export class MealsModule {}
