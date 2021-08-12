import { Injectable } from '@angular/core';
import { Card } from './card';
import { Container } from './container';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  container: Container;
  constructor() {
    this.container = new Container('Container 0', [
      new Card('Card 0', [
        new Container('Container 1', [new Card('Card 1'), new Card('Card 2')]),
        new Container('Container 2', [new Card('Card 3'), new Card('Card 4')])
      ])
    ]);
  }
}
