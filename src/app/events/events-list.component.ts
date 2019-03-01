import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events-service';
 
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';


@Component ({
   
    template: `
    <div>
      <h1>UpComing Events</h1>
      <button  [disabled]='isDisabled' (click)='changeStatus()' class='btn btn-primary'>Submit 1</button>
      <button  [disabled]='!isDisabled' (click)='changeStatus()' class='btn btn-secondary'>Submit 2 </button>
      <hr>
      <div class='row'>
        <div class='col-md-5' *ngFor="let evnt of events" >
          <events-thumbnail   [event]='evnt' ></events-thumbnail>
        </div>
     </div>
    </div>`
              
})
export class EventsListComponent implements OnInit {
     events: IEvent[];
     isDisabled: Boolean = true;

     constructor(private eventsService: EventsService,
                 private route: ActivatedRoute ) {
       
     }

     // tslint:disable-next-line:use-life-cycle-interface
     ngOnInit() {
      this.events = this.route.snapshot.data['events'];
     }
     
     

    changeStatus(){
      console.log("in change status")
      this.isDisabled = !this.isDisabled;
       
    }
 
}