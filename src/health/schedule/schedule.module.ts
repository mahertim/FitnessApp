import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

// components

// routing
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ScheduleRoutingModule],
  declarations: [ScheduleComponent],
})
export class ScheduleModule {}
