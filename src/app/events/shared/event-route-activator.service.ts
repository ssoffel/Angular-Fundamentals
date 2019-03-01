import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { EventsService } from './events-service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventsService: EventsService,
                private router: Router) {

    }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     console.log('this is RouterStateSnapshot', state);
     console.log('this is ActivatedRouteSnapshot ', route);
    const eventExists = !!this.eventsService.getEvent(+route.params['id']);

    if (!eventExists) {
        this.router.navigate(['/404']);
    }
    return eventExists;
 }
}


/*resolver if returning Observable form http request

resolve(route: ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id])
}


.ts
this.event = this.route.snapshot.data['event']

*/