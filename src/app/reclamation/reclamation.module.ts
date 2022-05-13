import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import { ReclamationRoutes } from './reclamation.routing';
import { GestionComponent } from './gestion/gestion.component';
import { DxDataGridModule, DxButtonModule, DxFunnelModule, DxSelectBoxModule, DxPolarChartModule } from 'devextreme-angular';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker/datepicker.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( ReclamationRoutes),
    DxDataGridModule,
    DxButtonModule,
    FormsModule,
        DxFunnelModule,
        DxPolarChartModule,
        DxSelectBoxModule,
        AngularDateTimePickerModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyBtrLgvFhExBQT6NFcXGEmK0kbxfWYdJ9I'})
  ],
  declarations: [
 GestionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ReclamationModule {}
