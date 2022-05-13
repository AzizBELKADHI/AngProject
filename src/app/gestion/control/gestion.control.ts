import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/pages/login/service/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class GestionControl {

  constructor(private router: Router, private auth: AuthService) { }

  data: any = null;

  public listeUser() {
    this.auth.readAll('pages/all-login').subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {

        if (this.data != null) {
            localStorage.setItem('listeUser', JSON.stringify(this.data));
            console.log(this.data)
        }
          
        
      }
    );
  }
   
  public deleteUser(pseudo:string) {
    this.auth.delete('pages/login',pseudo).subscribe(
      result => console.log(result),
      err => console.log("Erreur serveur")
);  
  }

}