import { VoterService } from './voter-service';
import { ISession } from './event.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../user/auth.service';


describe('VoterService', () => {
    let voterService: VoterService;
    let mockAuth: AuthService;  

    beforeEach(() => {
        mockAuth = { currentUser: {id: 1, userName: 'Scott'}};
        voterService = new VoterService(mockAuth);
        
        
         
    })

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = { voters: ['Scott', 'Oshie', 'Auston']};
            
            voterService.deleteUserVote(<ISession>session);
        expect(session.voters.length).toBe(2);
        expect(session.voters[0]).toBe('Oshie');
        })
    })
})