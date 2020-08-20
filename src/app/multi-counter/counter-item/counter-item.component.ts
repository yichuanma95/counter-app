import {Component, Input, OnInit} from '@angular/core';
import {Counter} from '../counter.model';
import {faArrowUp, faMinusCircle, faPlusCircle, faRedo} from '@fortawesome/free-solid-svg-icons';

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
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  faArrowUp = faArrowUp;
  faRedo = faRedo;

  onIncrement() {
    this.counter.amount++;
  }

  onDecrement() {
    this.counter.amount--;
  }

  onReset() {
    this.counter.amount = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
