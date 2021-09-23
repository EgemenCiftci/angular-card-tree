import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { Container } from '../container';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit() {}

  addContainer() {
    const container = new Container('New Container');
    container.addCard(new Card('New Card', 'New Content'));
    this.card.addContainer(container);
  }
}
