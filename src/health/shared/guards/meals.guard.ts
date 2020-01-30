import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MealsGuard implements CanActivate {
  constructor(private store: Store<fromStore.HealthState>) {}

  canActivate() {
    return this.checkMealsLoaded().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }

  checkMealsLoaded(): Observable<boolean> {
    return this.store.select(fromStore.getMealsLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadMeals());
        }
      }),
      filter((loaded) => loaded),
      take(1),
    );
  }
}
