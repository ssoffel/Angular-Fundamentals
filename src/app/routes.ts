import { Routes } from '@angular/router';

import { 
    EventsListComponent,
    EventsDetailComponent,
    EventsCreateComponent,
    EventsCreateSessionComponent,
    EventRouteActivator,
    ListResolverService

} from './events/index';

 import { Error404Component} from './errors/404.component';

 

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: ListResolverService}  },
    { path: 'events/new', component: EventsCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventsDetailComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: EventsCreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: './user/user.module#userModule'}
     

]