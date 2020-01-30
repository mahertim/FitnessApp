import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Meal } from '../../../shared/models/meal.model';

import * as fromStore from '../../../shared/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-meal',
  styleUrls: ['./meal.component.scss'],
  templateUrl: './meal.component.html',
})
export class MealComponent implements OnInit {
  meal$: Observable<Meal | null> = of(null);

  constructor(private store: Store<fromStore.HealthState>) {}

  ngOnInit() {
    this.meal$ = this.store.select(fromStore.getSelectedMeal);
  }

  addMeal(event: Meal) {
    this.store.dispatch(new fromStore.AddMeal(event));
  }
}
