import { Routes } from '@angular/router';

import { CompteComponent } from './compte.component';

export const CompteRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: CompteComponent
    }]
}
];
