import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount = 0;
  newAmountFromInput = 0;

  onDecrement() {
    if (this.amount === 0) {
      alert("This counter can\'t count below zero. Sorry.")
      return;
    }
    this.amount--;
  }

  onIncrement() {
    this.amount++;
  }

  onReset() {
    this.amount = 0;
    this.newAmountFromInput = 0;
  }

  onSet() {
    if (this.newAmountFromInput === null) {
      alert("Not a valid number.");
      this.newAmountFromInput = 0;
      return;
    }
    if (this.newAmountFromInput < 0) {
      alert("Please set the counter to a non-negative value. Thank you.");
      this.newAmountFromInput = 0;
      return;
    }
    this.amount = this.newAmountFromInput;
  }
}
