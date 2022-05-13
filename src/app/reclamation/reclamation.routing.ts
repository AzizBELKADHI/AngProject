import { Routes } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';



export const ReclamationRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'gestion',
        component: GestionComponent
    }]
    }
];
