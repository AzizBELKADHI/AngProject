import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/pages/login/service/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class GeolocalisationControl {

  constructor(private router: Router, private auth: AuthService) { }

  data: any = null;

  public machines() {
    this.auth.readMachines('entreprise/Machines').subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {

        if (this.data != null) {
            localStorage.setItem('machines', JSON.stringify(this.data));
            console.log(this.data)
        }
          
        
      }
    );
  }


}