import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { Meal } from '../../../../health/shared/models/meal.model';
import * as fromStore from '../../../shared/store';

@Component({
  selector: 'app-meals',
  styleUrls: ['./meals.component.scss'],
  templateUrl: './meals.component.html',
})
export class MealsComponent implements OnInit {
  meals$: Observable<Meal[]> = of([]);

  constructor(private store: Store<fromStore.HealthState>) {}

  ngOnInit() {
    this.meals$ = this.store.select(fromStore.getMeals);
  }
}
