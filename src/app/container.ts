import { Card } from './card';

export class Container {
  width: number;
  parent: Card;
  cards: Card[];

  constructor(public label?: string) {}

  addCard(card: Card) {
    if (!this.cards) {
      this.cards = [];
    }
    card.parent = this;
    this.cards.push(card);
  }

  removeCard(card: Card) {
    if (this.cards) {
      this.cards = this.cards.filter((f) => f !== card);
      if (this.cards.length <= 0) {
        this.cards = undefined;
        this.parent?.removeContainer(this);
      }
    }
  }
}
