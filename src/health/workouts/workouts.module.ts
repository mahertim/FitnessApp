import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';

// components

// routing
import { WorkoutsRoutingModule } from './workouts-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, WorkoutsRoutingModule],
  declarations: [WorkoutsComponent],
})
export class WorkoutsModule {}
