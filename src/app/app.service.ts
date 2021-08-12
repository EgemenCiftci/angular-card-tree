import { Injectable } from '@angular/core';
import { Card } from './card';
import { Container } from './container';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  container: Container;
  constructor() {
    this.container = new Container('Container 0');
    this.container.addCard(new Card('Card 0'));
    this.container.cards[0].addContainer(new Container('Container 1'));
    this.container.cards[0].addContainer(new Container('Container 2'));
    this.container.cards[0].containers[0].addCard(new Card('Card 1'));
    this.container.cards[0].containers[0].addCard(new Card('Card 2'));
    this.container.cards[0].containers[1].addCard(new Card('Card 3'));
    this.container.cards[0].containers[1].addCard(new Card('Card 4'));
  }
}
