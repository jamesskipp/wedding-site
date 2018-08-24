import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaneComponent } from './components/pane/pane.component';
import { IntroComponent } from './pages/intro/intro.component';

const appRoutes: Routes = [{
        path: '',
        component: IntroComponent,
    },
    {
        path: 'our-story',
        component: PaneComponent,
    },
    {
        path: 'rsvp',
        component: PaneComponent,
    },
    {
        path: 'event-info',
        component: PaneComponent,
    },
    {
        path: 'meet-the-wedding-party',
        component: PaneComponent,
    },
    {
        path: 'registry',
        component: PaneComponent,
    },
    {
        path: 'contact-us',
        component: PaneComponent,
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}