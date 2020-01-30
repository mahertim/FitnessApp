import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Meal } from '../../../shared/models/meal.model';

import * as fromStore from '../../../shared/store';

@Component({
  selector: 'app-meal',
  styleUrls: ['./meal.component.scss'],
  templateUrl: './meal.component.html',
})
export class MealComponent {
  constructor(private store: Store<fromStore.HealthState>) {}

  addMeal(event: Meal) {
    this.store.dispatch(new fromStore.AddMeal(event));
  }
}
