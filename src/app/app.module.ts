import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SingleCounterComponent } from './single-counter/single-counter.component';
import {AppRoutingModule} from './app-routing.module';
import { MultiCounterComponent } from './multi-counter/multi-counter.component';
import { CounterItemComponent } from './multi-counter/counter-item/counter-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SingleCounterComponent,
    MultiCounterComponent,
    CounterItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
