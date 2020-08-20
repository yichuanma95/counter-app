import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CounterService} from '../counter-service';
import {Subscription} from 'rxjs';
import {faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

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
  faMinus = faMinusCircle;
  faPlus = faPlusCircle;

  onDecrement() {
    this.counterService.singleCount = this.amount - 1;
  }

  onIncrement() {
    this.counterService.singleCount = this.amount + 1;
  }

  onReset() {
    this.counterService.singleCount = 0;
    this.setForm.reset();
  }

  onSet() {
    this.counterService.singleCount = +this.setForm.value.newAmount;
  }

  onNavigateToMulti() {
    this.router.navigate(['multi-counter']);
  }

  constructor(private counterService: CounterService, private router: Router) { }

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
