import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SingleCounterComponent} from './single-counter/single-counter.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/single-counter', pathMatch: "full"},
  {path: 'single-counter', component: SingleCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
