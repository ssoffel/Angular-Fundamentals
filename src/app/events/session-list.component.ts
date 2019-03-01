import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from './shared/event.model';
import { VoterService } from './shared/voter-service';
import { AuthService } from '../user/auth.service';


@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[];
    @Input() filterBy: String;
    @Input() sortBy: String;
    filteredSessions: ISession[] = [];
    

    constructor(private voterService: VoterService,
                private auth: AuthService ) {

    }
     

    ngOnChanges() {
        //ngOnChanges will get called any time one of the inputs gets changed
        //it can get called before sessions is set, so we must prevent that

        //Check if session is set
        if (this.sessions) {
           this.filteredSessions = this.filterSessions(this.filterBy)
           this.sortSessions();
        }        
    }
    filterSessions(filter) {
        if (filter === 'all') {
            return this.sessions.slice(0);
        }
        return this.sessions.filter(session => session.level === filter);
    }
    sortSessions() { 
        if(!this.sortBy) return;

        if (this.sortBy === 'voters') {
        this.filteredSessions = this.filteredSessions.sort(function(a: ISession, b: ISession){
            return b.voters.length - a.voters.length;
        })
      }
       if (this.sortBy === 'name') {
          this.filteredSessions = this.filteredSessions.sort(function(a: ISession, b: ISession){
                if(a.name > b.name) return 1
                else if ( a.name === b.name) return 0
                else return - 1

          })
        }
    }

    hasVoted(session: ISession) {
        return this.voterService.userHasVoted(session);
    }

    
    toggleVote(session: ISession) {
        if (this.hasVoted(session)) {
            this.voterService.deleteUserVote(session)
        } else {
            this.voterService.addUserVote(session)
        }

        if (this.sortBy === 'voters') {
            this.sortSessions();
        }
    }

}