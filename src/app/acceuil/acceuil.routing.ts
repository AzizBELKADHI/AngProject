import { Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil.component';

export const AcceuilRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'acceuil',
        component: AcceuilComponent
    }]
}
];
