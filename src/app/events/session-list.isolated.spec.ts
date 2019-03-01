import { ISession } from './shared/event.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {

    let component: SessionListComponent;
    let mockAuth, mockVoter;

    beforeEach(() => {
        mockVoter = jasmine.createSpyObj('mockVoter', ['userHasVoted', 'deleteUserVote']);
        component = new SessionListComponent(mockVoter, mockAuth );
       
    })

    describe('ngOnChanges filter', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'Angular', level: 'intermediate'},
                { name: 'Ruby', level: 'advanced'}, 
                { name: 'C++', level: 'beginner'}
            ];
            component.filterBy = 'beginner';
            component.sortBy = 'voters';

            component.ngOnChanges()

            expect(component.filteredSessions.length).toBe(1);
            expect(component.filteredSessions[0].name).toBe('C++');

        })
    })

    describe('ngOnChanges sort', () => {
        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'Angular', level: 'intermediate'},
                { name: 'Ruby', level: 'advanced'}, 
                { name: 'C++', level: 'beginner'}
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';

            component.ngOnChanges();

            expect(component.filteredSessions.length).toBe(3);
            expect(component.filteredSessions[0].name).toBe('Angular');

        })
    })

    describe('hasVoted(session)', () => {
        it('should return true if the user has voted, else false', () => {
           const session = <ISession>{ voters: ['Scott', 'Pete', 'Danielle']};
           mockVoter.userHasVoted.and.returnValue(true);
           const result = component.hasVoted(session);
                
           expect(result).toBe(true);
           

        })
    })

    
})