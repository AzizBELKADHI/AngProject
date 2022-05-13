import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { CompteComponent } from './compte.component';
import { CompteRoutes } from './compte.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CompteRoutes),
        FormsModule
    ],
    declarations: [CompteComponent]
})

export class CompteModule {}
