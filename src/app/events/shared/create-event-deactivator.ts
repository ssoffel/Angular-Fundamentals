import { EventsCreateComponent } from '../events-create.component';


export function checkDirtyState(component: EventsCreateComponent) {
  console.log("component", component.createEventForm.dirty)
    if ( component.createEventForm.dirty) {
      return window.confirm('You have not saved this event, do you really want to leave page?')
      
    }
    return true;
  }