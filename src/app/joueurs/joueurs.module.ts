
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { JoueursRoutes } from './joueurs.routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import DataSource from 'devextreme/data/data_source';
import { ListeComponent } from './liste/liste.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DxDataGridModule,DxSelectBoxModule, DxCheckBoxModule, DxPopupModule,DxButtonModule,DxTemplateModule, DxRangeSelectorModule ,DxChartModule,DxPieChartModule, DxFunnelModule} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(JoueursRoutes),
    FormsModule,
    DxPieChartModule,
    DxChartModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxRangeSelectorModule,
    DxDataGridModule,
    DxButtonModule,
    AngularDateTimePickerModule ,
    DxFunnelModule

  ],
  declarations: [
  ChiffresComponent,
ListeComponent

  ]
})

export class JoueursModule {}
