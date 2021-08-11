import { Component, OnInit, Input } from '@angular/core';
import { Container } from '../container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() container: Container;

  constructor() {}

  ngOnInit() {}
}
