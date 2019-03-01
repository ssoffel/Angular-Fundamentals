import { Component } from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError,  Event } from '@angular/router';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <div *ngIf='showLoader'>
    <div class='spinner'></div>
  </div>
  <router-outlet></router-outlet>
   `,
   styleUrls: ['./events-app.component.css']
  
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
  showLoader: Boolean = true;


  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if ( routerEvent instanceof NavigationStart){
        this.showLoader = true;
      }
      if ( routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError ||
           routerEvent instanceof NavigationCancel ) {
        this.showLoader = false;
      }

    })
  }
}
