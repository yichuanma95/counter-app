import {Component, OnDestroy, OnInit} from '@angular/core';
import {Counter} from './counter.model';
import {CounterService} from '../counter-service';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-multi-counter',
  templateUrl: './multi-counter.component.html',
  styleUrls: ['./multi-counter.component.css']
})
export class MultiCounterComponent implements OnInit, OnDestroy {
  counters: Counter[] = [];
  faTimes = faTimes;

  onAddCounter() {
    this.counters.push({name: 'New Counter', amount: 0});
  }

  onDeleteCounter(index: number) {
    this.counters.splice(index, 1);
  }

  onNavigateToSingle() {
    this.router.navigate(['single-counter']);
  }

  constructor(private counterService: CounterService, private router: Router) { }

  ngOnInit(): void {
    this.counters = this.counterService.multipleCounters;
  }

  ngOnDestroy() {
    this.counterService.multipleCounters = this.counters;
  }
}
