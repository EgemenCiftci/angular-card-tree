import { Injectable } from '@angular/core';
import { Card } from './card';
import { Container } from './container';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  container: Container;
  constructor() {
    this.container = new Container();
    this.container.addCard(new Card());
    this.container.cards[0].addContainer(new Container());
    this.container.cards[0].addContainer(new Container());
    this.container.cards[0].containers[0].addCard(new Card());
    this.container.cards[0].containers[0].addCard(new Card());
    this.container.cards[0].containers[1].addCard(new Card());
    this.container.cards[0].containers[1].addCard(new Card());
    this.container.label = 'Container 0';
    this.container.cards[0].label = 'Card 0';
    this.container.cards[0].containers[0].label = 'Container 1';
    this.container.cards[0].containers[1].label = 'Container 2';
    this.container.cards[0].containers[0].cards[0].label = 'Card 1';
    this.container.cards[0].containers[0].cards[1].label = 'Card 2';
    this.container.cards[0].containers[1].cards[0].label = 'Card 3';
    this.container.cards[0].containers[1].cards[1].label = 'Card 4';
  }
}
