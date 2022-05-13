import { Injectable } from '@angular/core';


export class Tooltip {
    isShown: boolean;
    text: string;
}

export class Marker {
    location?: any;
    tooltip?: Tooltip;
    type?: string;
}

let markerUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png"

let markers: Marker[] = [{
    type: "",
    location: {
        lat: 36.806194,
        lng: 10.173354
    },

    tooltip: {
        isShown: false,
        text: "Tunis"
    }
}, {
    type: "",
    location: {
        lat: 36.865432,
        lng: 10.163951
    },
    tooltip: {
        isShown: false,
        text: "Ariana"
    },
}
    , {
    type: "",
    location: {
        lat: 36.740711,
        lng: 10.228618
    },
    tooltip: {
        isShown: false,
        text: "Ben Arous"
    }
}, {
    type: "",
    location: {
        lat: 37.270475,
        lng: 9.86963

    },
    tooltip: {
        isShown: false,
        text: "Bizerte"
    }
}, {
    type: "",
    location: {
        lat: 36.808847,
        lng: 10.086938
    },
    tooltip: {
        isShown: false,
        text: "Manouba"
    }
}, {
    type: "",
    location: {
        lat: 35.813119,
        lng: 10.625036
    },
    tooltip: {
        isShown: false,
        text: "Sousse"
    }
}, {
    type: "",
    location: {
        lat: 34.797744,
        lng: 10.76756
    },
    tooltip: {
        isShown: false,
        text: "Sfax"
    }

},
{
    type: "",
    location: {
        lat: 36.450663,
        lng: 10.73555
    },
    tooltip: {
        isShown: false,
        text: "Nabeul"
    }

},{
    type: "",
    location: {
        lat: 36.404063,
        lng: 10.145687
    },
    tooltip: {
        isShown: false,
        text: "Zaghouan"
    }
},{
        type: "",
        location: {
            lat: 33.882104,
            lng: 10.099556
        },
        tooltip: {
            isShown: false,
            text: "Gabès"
        }
    }

];

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
export class RegionService {
    getMapTypes(): MapSetting[] {
        return mapTypes;
    }
    getMapProviders(): MapSetting[] {
        return mapProviders;
    }

    getMarkerUrl() : string {
        return markerUrl;
    }

    getMarkers(): Marker[] {
        return markers;
    }
}