import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Counter} from './multi-counter/counter.model';

@Injectable({providedIn: 'root'})
export class CounterService {
  private _singleCount = 0;
  singleCountChanged = new Subject<number>();
  multipleCounters: Counter[] = [{name: "First Counter", amount: 0}];

  get singleCount(): number {
    return this._singleCount;
  }

  set singleCount(value: number) {
    this._singleCount = value;
    this.singleCountChanged.next(this._singleCount);
  }
}
