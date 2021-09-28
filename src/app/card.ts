import { Container } from './container';

export class Card {
  width: number;
  height: number;
  parent: Container;
  containers: Container[];
  visible = true;
  headerVisible = true;
  contentVisible = true;

  constructor(public label?: string, public content?: string) {}

  addContainer(container: Container) {
    if (!this.containers) {
      this.containers = [];
    }
    container.parent = this;
    this.containers.push(container);
  }

  removeContainer(container: Container) {
    if (this.containers) {
      this.containers = this.containers.filter((f) => f !== container);
      if (this.containers.length <= 0) {
        this.containers = undefined;
      }
    }
  }

  hide() {
    this.visible = false;
  }
}
