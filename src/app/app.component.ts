import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <app-choose-rules
      [childDeckList]='models'
    ></app-choose-rules>
  `
})
export class AppComponent {
  models: FirebaseListObservable<any[]>;
  constructor(angularFire: AngularFire){
    this.models = angularFire.database.list('decks');
  }
  title = 'Smashup Utility';
}
