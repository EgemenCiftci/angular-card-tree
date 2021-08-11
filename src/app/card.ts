import { Container } from './container';

export class Card {
  label: string;
  containers: Container[];
  width: number;
  height: number;

  addContainer(container: Container) {
    if (!this.containers) {
      this.containers = [];
    }
    this.containers.push(container);
  }
}
