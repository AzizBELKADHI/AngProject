import { Injectable } from '@angular/core';
import { GeolocalisationControl } from 'app/geolocalisation/control/geolocalisation.control';


export class Tooltip {
    isShown: boolean;
    text: string;
}

export class Marker {
    location: any;
    tooltip: Tooltip;
    type: string;
}


export class MapSetting {
    key: string;
    name: string;
}

let mapTypes: MapSetting[] = [{
    key: "roadmap",
    name: "Map Standard"
}, {
    key: "satellite",
    name: "Photographic Map"
}, {
    key: "hybrid",
    name: "Hybrid Map"
}];

let mapProviders: MapSetting[] = [{
    key: "google",
    name: "Google Dynamic Map"
}, {
    key: "googleStatic",
    name: "Google Static Map"
}, {
    key: "bing",
    name: "Bing Map"
}];






@Injectable()
export class MapService {
    markerWowpay=[];
    markerRunpay=[];
    listeMachines: any;

    constructor(public geolocalisationControl: GeolocalisationControl) { }




    getMapTypes(): MapSetting[] {
        return mapTypes;
    }
    getMapProviders(): MapSetting[] {
        return mapProviders;
    }

    getMarkerUrl(name): string {
        return "/assets/img/marquer/MapMarker_PushPin_Left_" + name + ".png";
    }

    getMarkersRunpay(){
        this.listeMachines = JSON.parse(localStorage.getItem('machines'));
        for (let i = 0; i < this.listeMachines.length; i++) {
            if (this.listeMachines[i][0] == "runpay") {
                let markersRunpay: Marker = {
                    type: this.listeMachines[i][0],
                    location: {
                        lat: this.listeMachines[i][2],
                        lng: this.listeMachines[i][1]
                    },
                    tooltip: {
                        isShown: false,
                        text: this.listeMachines[i][0]
                    }
                };

                this.markerRunpay.push(markersRunpay);
            }
        }
       // localStorage.removeItem('machines');
     //  console.log("Runpay "+this.markerRunpay.length)
        return this.markerRunpay;
    }

    getMarkersWowpay(){
      
        this.listeMachines = JSON.parse(localStorage.getItem('machines'));
        for (let i = 0; i < this.listeMachines.length; i++) {
            if (this.listeMachines[i][0] == "wowpay") {
                
                let markersRunpay: Marker = {
                    type: this.listeMachines[i][0],
                    location: {
                        lat: this.listeMachines[i][2],
                        lng: this.listeMachines[i][1]
                    },

                    tooltip: {
                        isShown: false,
                        text: this.listeMachines[i][0]
                    }
                };

                this.markerWowpay.push(markersRunpay);
            }
        }
     //   localStorage.removeItem('machines');
     return this.markerWowpay;

    }
}