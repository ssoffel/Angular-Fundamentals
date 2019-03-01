import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventsService } from './events-service';
import { map } from 'rxjs/operators';

@Injectable()
export class ListResolverService implements Resolve<any> {

    constructor(private eventsService: EventsService) {
    
    }
    resolve() {
        console.log("inside resolve of list-resolver service")
        //make an async Ajax call
        return this.eventsService.getEvents().pipe(map(events => events));
    }
}