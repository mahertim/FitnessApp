import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app/app.component';
import { Store } from 'store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
var firebaseConfig = {
  apiKey: 'AIzaSyCnXxIGnuQbeqvC_qjBqO8UtKSYd-Gsqgs',
  authDomain: 'fitnessapp-fba09.firebaseapp.com',
  databaseURL: 'https://fitnessapp-fba09.firebaseio.com',
  projectId: 'fitnessapp-fba09',
  storageBucket: 'fitnessapp-fba09.appspot.com',
  messagingSenderId: '1066914123529',
  appId: '1:1066914123529:web:41076db1c9240367304dd8',
};
*/
