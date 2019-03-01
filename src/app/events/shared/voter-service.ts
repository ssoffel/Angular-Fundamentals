import { Injectable } from '@angular/core';
import { ISession } from './event.model';
import { AuthService } from '../../user/auth.service';
 

@Injectable()

export class VoterService {

    constructor(private auth: AuthService)
                  {

    }

    userHasVoted(session: ISession) {
        return session.voters.some(voter => voter === this.auth.currentUser.userName);
    }

    deleteUserVote(session: ISession) {
        session.voters = session.voters.filter(voter => voter !== this.auth.currentUser.userName);
    }

    addUserVote(session: ISession) {
       session.voters.push(this.auth.currentUser.userName);
    }

   /*if using http
   addUserVoter(eventId: number, session: ISession)
   const options = { headers: new HttpHeaders({ 'Content-Type': '/application/json'})}
   const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
   this.http.post(url, {}, options)
   .pipe(catchError(this.handleError('addVoter')))
   */
}