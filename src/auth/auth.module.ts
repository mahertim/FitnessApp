import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { StoreModule } from '@ngrx/store';

// routing
import { AuthRoutingModule } from './auth-routing.module';

// shared modules
import { SharedModule } from './shared/shared.module';

// store
import { reducers, effects } from './shared/store';
import { EffectsModule } from '@ngrx/effects';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCnXxIGnuQbeqvC_qjBqO8UtKSYd-Gsqgs',
  authDomain: 'fitnessapp-fba09.firebaseapp.com',
  databaseURL: 'https://fitnessapp-fba09.firebaseio.com',
  projectId: 'fitnessapp-fba09',
  storageBucket: 'fitnessapp-fba09.appspot.com',
  messagingSenderId: '1066914123529',
  appId: '1:1066914123529:web:41076db1c9240367304dd8',
};

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class AuthModule {}
