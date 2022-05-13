import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdTableComponent } from '../md/md-table/md-table.component';

import { AcceuilComponent } from './acceuil.component';
import { AcceuilRoutes } from './acceuil.routing';
import { DxBarGaugeModule,DxPolarChartModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AcceuilRoutes),
        FormsModule,
        DxBarGaugeModule,
        DxPolarChartModule,
         DxSelectBoxModule
    ],
    declarations: [AcceuilComponent, MdTableComponent]
})

export class AcceuilModule {}
