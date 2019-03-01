import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  EventsListComponent,
 
  EventsThumbnailComponent,
  EventsService,
  ListResolverService,
  checkDirtyState,
  EventRouteActivator,
  EventsDetailComponent,
  EventsCreateComponent,
  EventsCreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  VoteComponent,
  VoterService,
  LocationValidatorDirective
 
} from './events/index';

import {JQ_TOKEN,
        TOASTR_TOKEN,
        Toastr, 
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective
       } from './common/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventsCreateComponent,
    Error404Component,
    NavBarComponent,
    EventsDetailComponent,
    EventsCreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    VoteComponent,
    LocationValidatorDirective
    
    
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [EventsService, EventRouteActivator, ListResolverService, AuthService, VoterService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [EventsAppComponent]
})
 
export class AppModule { }

 
