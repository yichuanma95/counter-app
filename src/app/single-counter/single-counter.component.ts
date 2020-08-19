import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-single-counter',
  templateUrl: './single-counter.component.html',
  styleUrls: ['./single-counter.component.css']
})
export class SingleCounterComponent implements OnInit {
  amount = 0;
  @ViewChild('f', {static: true})
  setForm: NgForm;

  onDecrement() {
    this.amount--;
  }

  onIncrement() {
    this.amount++;
  }

  onReset() {
    this.amount = 0;
    this.setForm.reset();
  }

  onSet() {
    this.amount = +this.setForm.value.newAmount;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
