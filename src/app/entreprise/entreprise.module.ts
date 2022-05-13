import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { EntrepriseRoutes } from './entreprise.routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import DataSource from 'devextreme/data/data_source';
import { ListeComponent } from './liste/liste.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DxDataGridModule,DxSelectBoxModule, DxCheckBoxModule, DxPopupModule,DxButtonModule,DxTemplateModule, DxRangeSelectorModule ,DxChartModule,DxPieChartModule} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EntrepriseRoutes),
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
    AngularDateTimePickerModule 
  ],
  declarations: [
  ChiffresComponent,
ListeComponent

  ]
})


export class EntrepriseModule {}
