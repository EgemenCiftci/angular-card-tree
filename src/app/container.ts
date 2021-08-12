import { Card } from './card';

export class Container {
  width: number;

  constructor(public label?: string, public cards?: Card[]) {}

  addCard(card: Card) {
    if (!this.cards) {
      this.cards = [];
    }
    this.cards.push(card);
  }

  removeCard(card: Card) {
    if (this.cards) {
      this.cards = this.cards.filter(f => f !== card);
    }
  }
}
