import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Utilisateur } from '../model/Utilisateur';
import 'rxjs/add/operator/map';
import { error } from 'selenium-webdriver';
declare var $: any;

@Injectable()
export class AuthControl implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  public checkLogin(url: string): boolean {
    if (this.isLogged()) { return true; }
    // Store the attempted URL for redirecting
    this.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

  logged: boolean = false;
  data: any = null;
  user = new Utilisateur(null, null, null, null, null, null, null, null, null, null);
  redirectUrl: string = "/";

  public isLogged() {
    return this.logged;
  }


  public login(username: string, password: string) {
    this.auth.setAuth(username, password);
    this.auth.read('pages/login?pseudo', username).subscribe(
      data => this.data = data,
      err => console.log(err),
      () => {
        if (this.data != null) {
          if ((this.data.pseudo == username) && (this.data.mdp == password)) {
            console.log("*** COMPTE DU BACK ***");
            console.log(this.data);
            this.user.pseudo = this.data.pseudo;
            this.user.mdp = this.data.mdp;
            this.user.type_compte = this.data.type_compte;
            this.user.etat_compte = this.data.etat_compte;
            this.user.avatar = this.data.avatar;
            this.user.id = this.data.id;
            this.user.prenom = this.data.prenom;
            this.user.nom = this.data.nom;
            this.user.email = this.data.email;
            this.user.date_inscrit = this.data.date_inscrit;
            this.logged = true;
            this.router.navigate(['']);
            console.log("*** COMPTE DU FRONT ***");
            console.log('Username :' + this.user.pseudo);
            console.log('Password :' + this.user.mdp);
            console.log('Nom :' + this.user.nom);
            console.log('Prenom :' + this.user.prenom);
            console.log('Avatar :' + this.user.avatar);
            //notification login
            $.notify({
              icon: "notifications",
              message: "Bienvenue Mme ou Mr<b> " + this.user.prenom + " </b> sur Bountou1x2 platforme."

            }, {
                type: 'success',
                timer: 3000,
                placement: {
                  from: 'top',
                  align: 'right'
                }
              });
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            console.log(this.user);

          }
        }
      }
    );
  }
  public logout() {
    this.logged = false;
    this.router.navigate(['/login']);
  }



}