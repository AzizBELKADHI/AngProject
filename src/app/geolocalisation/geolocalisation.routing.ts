import { Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParieursComponent } from './parieurs/parieurs.component';




export const GeolocalisationRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'entreprise',
        component: EntrepriseComponent
    }]},{
    path: '',
    children: [ {
      path: 'parieurs',
      component: ParieursComponent
    }]
    }
];
