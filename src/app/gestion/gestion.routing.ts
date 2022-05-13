import { Routes } from '@angular/router';

import { GestionComponent } from './gestion.component';

export const GestionRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: GestionComponent
    }]
}
];
