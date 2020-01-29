import { Component } from '@angular/core';

import { Meal } from '../../../shared/models/meal.model';

@Component({
  selector: 'app-meal',
  styleUrls: ['./meal.component.scss'],
  templateUrl: './meal.component.html',
})
export class MealComponent {
  constructor() {}

  addMeal(event: Meal) {
    console.log('meal:', event);
  }
}
