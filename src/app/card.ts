import { Container } from './container';

export class Card {
  label: string;
  containers: Container[];

  addContainer(container: Container) {
    if (!this.containers) {
      this.containers = [];
    }
    this.containers.push(container);
  }
}
