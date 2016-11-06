import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <div class="deck" *ngFor="let deck of models | async">
      <p>Deck Name: {{deck.name}}</p>
      <p>Set: {{deck.set}}</p>
    </div>
  `
})
export class AppComponent {
  models: FirebaseListObservable<any[]>;
  constructor(angularFire: AngularFire){
    this.models = angularFire.database.list('decks');


  }
  title = 'Smashup Utility';
}
