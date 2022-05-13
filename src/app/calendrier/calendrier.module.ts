import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { CalendrierComponent } from './calendrier.component';
import { CalendrierRoutes } from './calendrier.routing';
import { CalendrierService } from 'app/calendrier/calendrier.service';
import { DxSchedulerModule, DxTemplateModule, DxCheckBoxModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CalendrierRoutes),
        FormsModule,
         DxSchedulerModule,
        DxTemplateModule,
        DxCheckBoxModule
    ],
    declarations: [CalendrierComponent],
    providers:[CalendrierService]
})

export class CalendrierModule {}
