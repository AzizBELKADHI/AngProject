
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthService } from "./pages/login/service/auth.service";
import {AuthControl} from "./pages/login/control/auth.control";
import {ResetControl} from "./pages/login/control/reset.control";
import { routing } from './app.routing';
import { JoueursControl } from 'app/joueurs/control/joueurs.control';
import { JoueursService } from 'app/joueurs/service/joueurs.service';
import { EntrepriseControl } from './entreprise/control/entreprise.control';
import { EntrepriseService } from './entreprise/service/entreprise.service';
import { MapService } from './geolocalisation/service/map.service';
import { RegionService } from './geolocalisation/service/region.service';
import { GestionService } from 'app/gestion/service/gestion.service';
import { GestionControl } from 'app/gestion/control/gestion.control';
import { GeolocalisationControl } from 'app/geolocalisation/control/geolocalisation.control';
import { ReclamationService } from 'app/reclamation/service/reclamation.service';
import { RecService } from 'app/reclamation/service/rec.service';
import { ReclamationControl } from 'app/reclamation/control/reclamation.control';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        routing
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
    ],
  providers: [GestionService,GestionControl,AuthService,AuthControl,ResetControl,JoueursControl,JoueursService,EntrepriseControl,EntrepriseService,MapService,RegionService,GeolocalisationControl,ReclamationService,RecService,ReclamationControl],
    bootstrap:[ AppComponent ]

    
})

export class AppModule {
    
 }
