import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AuthFormComponent } from './components/auth-form/auth-form.component';

// services
import { AuthService } from './services/auth/auth.service';

// guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
})
export class SharedModule {
  /**
   * Stuff in @NgModule above will be instanciated each time
   * this module is imported. These are instantiated once and
   * shared among all imports of this module.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
