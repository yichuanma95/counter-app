import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
