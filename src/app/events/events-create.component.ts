import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { EventsService } from './shared/events-service';

@Component({
    templateUrl: './events-create.component.html',
    styles: [`
        em {float: right; color: #E05C65 }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
     
})

export class EventsCreateComponent {
    newEvent;
    @ViewChild('newEventForm') public createEventForm: NgForm;
    constructor(private router: Router,
                private eventsService: EventsService) {

    }

    handleCancel() {
        this.router.navigate(['/events']);
    }

    save(newEventForm) {
       // const newEvent: Event = Object.assign({}, this.event) if you use two way binding
        this.eventsService.saveEvent(newEventForm);

        this.createEventForm.reset();
        this.router.navigate(['/events']);
    }

    /*
    if using http and return observable
    this.eventsService.saveEvent(newEventForm).subscribe(() => {
        this.createEventForm.reset();
        this.router.navigate(['/events']);

    })

    */
     
}