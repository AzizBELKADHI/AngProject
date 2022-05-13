import { MapService ,MapSetting,Marker} from '../service/map.service';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapModule, DxSelectBoxModule,DxCheckBoxModule,DxButtonModule } from 'devextreme-angular';
import { GeolocalisationControl } from 'app/geolocalisation/control/geolocalisation.control';



@Component({
  selector: 'entreprise-cmp',
  templateUrl: './entreprise.component.html'
})


export class EntrepriseComponent  {
  mapTypes: MapSetting[];
  mapProviders: MapSetting[];  
  customMarkerUrl: string;
  mapMarkerUrl: string;
  markers: Marker[];
  markersTous: Marker[];
  markersRunpay: Marker[];
  markersWowpay: Marker[];

  
  constructor(public service: MapService,public geolocalisationControl: GeolocalisationControl) {
    this.geolocalisationControl.machines();
    this.mapTypes = service.getMapTypes();
    this.mapProviders = service.getMapProviders();
    
    this.markersRunpay= this.service.getMarkersRunpay();
    this.markersWowpay= this.service.getMarkersWowpay();
    this.markers=this.markersRunpay.concat(this.markersWowpay);
    this.markersTous=this.markers;
    this.customMarkerUrl =this.mapMarkerUrl = service.getMarkerUrl("Black");
   }


   checkCustomRunpay(e) {
    var target = e.target;
    if (target.checked) { 
        this.markers= this.service.getMarkersRunpay(); 
        this.mapMarkerUrl = this.service.getMarkerUrl("Red");
    } else {
         this.markers=[];
        }
}


    checkCustomWowpay(e) {
        var target = e.target;
        if (target.checked) {
        this.markers= this.service.getMarkersWowpay(); 
        this.mapMarkerUrl = this.service.getMarkerUrl("Blue");
    } else {
         this.markers=[];
        }
    }


    checkCustomTous(e) {
        var target = e.target;
    if (target.checked) {
            this.markers=this.markersTous; 
            this.mapMarkerUrl = this.service.getMarkerUrl("Black");
        } else {
             this.markers=[];
            }
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
