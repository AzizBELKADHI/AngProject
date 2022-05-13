import { Routes } from '@angular/router';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { ListeComponent } from './liste/liste.component';




export const EntrepriseRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'chiffres',
        component: ChiffresComponent
    }]},{
    path: '',
    children: [ {
      path: 'liste',
      component: ListeComponent
    }]
    }
];
