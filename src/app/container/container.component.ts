import { Component, Input } from '@angular/core';
import { Card } from '../card';
import { Container } from '../container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  @Input() container: Container;

  addCard() {
    this.container.addCard(new Card('New Card', 'New Content'));
  }

  hide() {
    this.container.hide();
  }
}
