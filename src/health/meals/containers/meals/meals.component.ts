import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, Subscription, of } from 'rxjs';

import { MealsService } from '../../../shared/services/meals/meals.service';
import { Meal } from '../../../../health/shared/models/meal.model';
import * as fromStore from '../../../shared/store';

@Component({
  selector: 'app-meals',
  styleUrls: ['./meals.component.scss'],
  templateUrl: './meals.component.html',
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<Meal[]> = of([]);
  subscription: Subscription | null = null;

  constructor(
    private mealsService: MealsService,
    private store: Store<fromStore.HealthState>,
  ) {}

  ngOnInit() {
    this.subscription = this.mealsService.meals$.subscribe();
    this.meals$ = this.store.select(fromStore.getMeals);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
