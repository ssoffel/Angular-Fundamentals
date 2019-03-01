import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events-service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from './shared/index';
import { ISession } from './shared/event.model';

@Component({
    templateUrl: './events-detail.component.html',
    styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer } 
    .filter { margin-right: 1em; font-size: 20px;}
    .sessions { margin-bottom: 1.5em }
    `]
})

export class EventsDetailComponent implements OnInit {
    event: IEvent;
    addMode: Boolean = false;
    filterBy: String = 'all';
    sortBy: String = 'null';
     

    constructor(private detailsService: EventsService,
                private route: ActivatedRoute,
                private router: Router) {

    }
// tslint:disable-next-line:eofline


ngOnInit() {
    console.log('this.route.params', this.route.params)
    this.route.paramMap.subscribe((params: Params) => {
     const id = params.get('id')
        this.event = this.detailsService.getEvent(+id);
        this.addMode = false;
    })
     
}
/*
ngOnInit(){
    this.route.paramMap.subscribe((parmams: Parmas) => {
        this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
            this.event = event
            this.addMode = false;
        })
    })
}
*/

addSession() {
    this.addMode = true;
}
detailSaveEventSession(session: ISession) {
  let maxID = Math.max.apply(null, this.event.sessions.map(sess => sess.id));
  session.id =  Number(maxID) + 1;
  this.event.sessions.push(session);
  this.detailsService.updateEvent(this.event);
  this.addMode = false;
}

detailCancelEventSession() {
    this.addMode = false;
}


}

 