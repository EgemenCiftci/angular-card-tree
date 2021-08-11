import { Card } from './card';

export class Container {
  label: string;
  cards: Card[];

  addCard(card: Card) {
    if (!this.cards) {
      this.cards = [];
    }
    this.cards.push(card);
  }
}
