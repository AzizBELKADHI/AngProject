import { Component , OnInit } from '@angular/core';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapModule, DxSelectBoxModule } from 'devextreme-angular';
import { MapSetting, RegionService,Marker } from '../service/region.service';


@Component({
    moduleId: module.id,
    selector: 'parieurs-cmp',
    templateUrl: 'parieurs.component.html'
})

export class ParieursComponent {
  mapTypes: MapSetting[];
  mapProviders: MapSetting[]; 
  customMarkerUrl: string;
  mapMarkerUrl: string;
  markers: Marker[];  

  constructor(service: RegionService) {
      this.mapTypes = service.getMapTypes();
      this.mapProviders = service.getMapProviders();
      this.markers= service.getMarkers();
      this.customMarkerUrl =this.mapMarkerUrl = service.getMarkerUrl();
  }


  checkCustomMarker(data) {
    this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
}


showTooltips() {
    this.markers = this.markers.map(function (item) {
        item.tooltip.isShown = true;
        return item;
    });}
    
 
}
