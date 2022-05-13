import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'acceuil',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './acceuil/acceuil.module#AcceuilModule'
    },{
        path: 'entreprise',
        loadChildren: './entreprise/entreprise.module#EntrepriseModule'
    },{
        path: 'joueurs',
        loadChildren: './joueurs/joueurs.module#JoueursModule'
    },{
        path: 'geolocalisation',
        loadChildren: './geolocalisation/geolocalisation.module#GeolocalisationModule'
    },{
        path: 'reclamation',
        loadChildren: './reclamation/reclamation.module#ReclamationModule'
    },{
        path: 'gestion',
        loadChildren: './gestion/gestion.module#GestionModule'
    },{
        path: 'excel',
        loadChildren: './excel/excel.module#ExcelModule'
    },{
        path: 'calendrier',
        loadChildren: './calendrier/calendrier.module#CalendrierModule'
    },{
        path: 'compte',
        loadChildren: './compte/compte.module#CompteModule'
    }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
export const routing = RouterModule.forRoot(AppRoutes);