import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { ExcelComponent } from './excel.component';
import { ExcelRoutes } from './excel.routing';
import { DxSelectBoxModule, DxFileUploaderModule, DxCheckBoxModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExcelRoutes),
        FormsModule,
        DxCheckBoxModule,
        DxFileUploaderModule,
        DxSelectBoxModule
    ],
    declarations: [ExcelComponent]
})

export class ExcelModule {}
