import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

// routing
import { HealthRoutingModule } from './health-routing.module';

// shared modules
import { SharedModule } from './shared/shared.module';

// store
import { reducers, effects } from './shared/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    HealthRoutingModule,
    SharedModule.forRoot(),
    StoreModule.forFeature('health', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class HealthModule {}
