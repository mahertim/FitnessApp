import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutsComponent } from './containers/workouts/workouts.component';

export const ROUTES: Routes = [{ path: '', component: WorkoutsComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
