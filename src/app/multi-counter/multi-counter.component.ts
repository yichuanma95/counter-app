import {Component, OnDestroy, OnInit} from '@angular/core';
import {Counter} from './counter.model';
import {CounterService} from '../counter-service';

@Component({
  selector: 'app-multi-counter',
  templateUrl: './multi-counter.component.html',
  styleUrls: ['./multi-counter.component.css']
})
export class MultiCounterComponent implements OnInit, OnDestroy {
  counters: Counter[] = [];

  onAddCounter() {
    this.counters.push({name: 'New Counter', amount: 0});
  }

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counters = this.counterService.multipleCounters
  }

  ngOnDestroy() {
    this.counterService.multipleCounters = this.counters;
  }
}
