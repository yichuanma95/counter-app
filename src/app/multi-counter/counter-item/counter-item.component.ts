import {Component, Input, OnInit} from '@angular/core';
import {Counter} from '../counter.model';

@Component({
  selector: 'app-counter-item',
  templateUrl: './counter-item.component.html',
  styleUrls: ['./counter-item.component.css']
})
export class CounterItemComponent implements OnInit {
  @Input()
  counter: Counter;
  @Input()
  index: number;

  onIncrement() {
    this.counter.amount++;
  }

  onDecrement() {
    this.counter.amount--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
