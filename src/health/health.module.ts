import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

// routing
import { HealthRoutingModule } from './health-routing.module';

// shared modules
import { SharedModule } from './shared/shared.module';

// store
import { reducers } from './shared/store';

@NgModule({
  imports: [
    HealthRoutingModule,
    SharedModule.forRoot(),
    StoreModule.forFeature('health', reducers),
  ],
})
export class HealthModule {}
