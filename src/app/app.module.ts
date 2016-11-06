import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ChooseRulesComponent } from './choose-rules/choose-rules.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAE1bhZLEOMZRsgvNnWYXI73tiWjhqO1ug",
    authDomain: "smashup-e7242.firebaseapp.com",
    databaseURL: "https://smashup-e7242.firebaseio.com",
    storageBucket: "smashup-e7242.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    ChooseRulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
