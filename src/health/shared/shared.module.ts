import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// services
import { MealsService } from './services/meals/meals.service';

@NgModule({
  imports: [CommonModule, AngularFireDatabaseModule],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService],
    };
  }
}
