import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeolocalisationRoutes } from './geolocalisation.routing';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapModule, DxSelectBoxModule,DxCheckBoxModule,DxButtonModule } from 'devextreme-angular';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GeolocalisationRoutes),
    FormsModule,
    DxMapModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule
  ],
  declarations: [
   EntrepriseComponent,
   ParieursComponent
  ]
})

export class GeolocalisationModule {}
