import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';


@Component({
    selector: 'events-thumbnail',
    template: `
    
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name | uppercase}}</h2>
      <div>Date: {{event.date | date }}</div>
      <div [ngStyle]="addClassStyle()" [ngSwitch]='event?.time' >Time: {{event.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(onTime Start)</span>
      </div>
      <div>Price: {{event.price | currency }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event.location.address}}</span>
        <span class='pad-left'>{{event.location.city}}, {{event.location.country}}
        </span>
      </div>

    </div>
    
    `,
    styles: [`.pad-left { margin-left: 10px;}
              .well div { color: #bbb;}
              .thumbnail { min-height: 14em;}

            `]
})
export class EventsThumbnailComponent {
    @Input() event: IEvent;

    addClassStyle(): any {
      if(this.event.time === '8:00 am'){
        return { color: '#003300', 'font-weight': 'bold' }
      }else {
        return "";
      }
    }






}
