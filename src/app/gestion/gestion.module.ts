import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { GestionComponent } from './gestion.component';
import { GestionRoutes } from './gestion.routing';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

@NgModule({
    imports: [
        RouterModule.forChild(GestionRoutes),
        CommonModule,
        DxDataGridModule,
        DxButtonModule,
        FormsModule
    ],
    declarations: [GestionComponent],
    providers:[]
})

export class GestionModule {}
