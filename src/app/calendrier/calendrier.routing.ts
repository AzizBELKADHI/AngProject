import { Routes } from '@angular/router';

import { CalendrierComponent } from './calendrier.component';

export const CalendrierRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: CalendrierComponent
    }]
}
];
