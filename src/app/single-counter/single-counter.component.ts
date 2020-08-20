import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CounterService} from '../counter-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-counter',
  templateUrl: './single-counter.component.html',
  styleUrls: ['./single-counter.component.css']
})
export class SingleCounterComponent implements OnInit, OnDestroy {
  amount = 0;
  @ViewChild('f', {static: true})
  setForm: NgForm;
  amountSub: Subscription;

  onDecrement() {
    // this.amount--;
    this.counterService.singleCount = this.amount - 1;
  }

  onIncrement() {
    // this.amount++;
    this.counterService.singleCount = this.amount + 1;
  }

  onReset() {
    // this.amount = 0;
    this.counterService.singleCount = 0;
    this.setForm.reset();
  }

  onSet() {
    // this.amount = +this.setForm.value.newAmount;
    this.counterService.singleCount = +this.setForm.value.newAmount;
  }

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.amount = this.counterService.singleCount;
    this.amountSub = this.counterService.singleCountChanged.subscribe(amount => {
      this.amount = amount;
    });
  }

  ngOnDestroy() {
    this.amountSub.unsubscribe();
  }
}
