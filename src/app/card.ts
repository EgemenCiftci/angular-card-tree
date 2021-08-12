import { Container } from './container';

export class Card {
  width: number;
  height: number;

  constructor(public label?: string, public containers?: Container[]) {}

  addContainer(container: Container) {
    if (!this.containers) {
      this.containers = [];
    }
    this.containers.push(container);
  }

  removeContainer(container: Container) {
    if (this.containers) {
      this.containers = this.containers.filter(f => f !== container);
    }
  }
}
