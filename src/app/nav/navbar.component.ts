import { Component, Inject} from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventsService } from '../events/shared/events-service';
 

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav { font-size: 1.5em}
    li > a.active { color: #F97924; }
`]
})

export class NavBarComponent {
    
    searchTerm: string = "";
    foundSessions: ISession[];
    constructor(private userAuth: AuthService,
                private eventsService: EventsService) {

    }

    searchSession(term) {
        
        this.eventsService.searchSessions(term).subscribe(
            sessions => { this.foundSessions = sessions;
            console.log("this.foundsessions", this.foundSessions) });
            
    }

    
   
     
}