 import { TestBed, async, ComponentFixture } from '@angular/core/testing';
 import { DebugElement } from '@angular/core';
 import { By } from '@angular/platform-browser';
 import { SessionListComponent } from './session-list.component';
 import { VoteComponent } from './vote.component';
 import { DurationPipe } from './shared/duration.pipe';
 import { CollapsibleWellComponent } from '../common/collapsible-well.component';
 import { VoterService } from './shared/voter-service';
 import { AuthService } from '../user/auth.service';
 import { ISession } from './shared/event.model';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,   //wrapper around component, gives us change detection
    component: SessionListComponent,                       //the actual component
    element: HTMLElement,                                  //native element
    debugEl: DebugElement;                                  //wrapper around the native element

    //we create out testing module and component this must run before we create our servicelist instance
    beforeEach(async(() => {
        let mockAuthService = { isAuthenticated: () => true };
        let mockVoterService = { userHasVoted: () => true };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                VoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        }).compileComponents();
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

   describe('initial display', () => {
       it('should have the correct session title', () => {
        component.sessions = [{ id: 1, name: 'Session 1', presenter: 'Auston Soffel', duration: 1, level: 'Advanced', 
        abstract: 'abstract', voters: ['Leslie', 'Peter'] }];
        component.filterBy = 'all';
        component.sortBy = 'name';

        component.ngOnChanges();  //must call manualy bc the chnage comes from parent, otherwise it will not go off
                                  //if this was ngOnInit you would no thave to call it
        fixture.detectChanges();  //runs through the change detection cycle

        expect(element.querySelector('[well-title]').textContent)
        .toContain('Session 1');
        //or
        expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');


       });
   })

})