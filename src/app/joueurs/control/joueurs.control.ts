import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JoueursService } from 'app/joueurs/service/joueurs.service';
import { Mois } from 'app/joueurs/model/Mois';
import 'rxjs/add/operator/map';

@Injectable()
export class JoueursControl {
  constructor(private router: Router, private formsService: JoueursService) { }

  data: any = null;
  j_actif :any = null;
  j_inactif :any = null;
  j_bloque :any = null;
  j_ferme :any = null;
  j_sexe_femme :any = null;
  j_sexe_homme :any = null;
  j_Age1 :any = null;
  j_Age2 :any = null;
  j_Age3 :any = null;
  j_Age4 :any = null;
  j_mois= new Mois();
  public actif(dateDebut:string,dateFin:string) {
      this.formsService.readJoueur('joueur/actif',dateDebut,dateFin).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              this.j_actif = this.data[0];
              localStorage.setItem('nombreActif', JSON.stringify(this.j_actif));
              console.log(this.j_actif);
            }
          
        }
      );
    }
    public inactif(dateDebut:string,dateFin:string) {
      this.formsService.readJoueur('joueur/inactif',dateDebut,dateFin).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              this.j_inactif = this.data[0];
              localStorage.setItem('nombreInactif', JSON.stringify(this.j_inactif));
              console.log(this.j_inactif);
            }
        }
      );
    }
    public bloque(dateDebut:string,dateFin:string) {
      this.formsService.readJoueur('joueur/bloque',dateDebut,dateFin).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              this.j_bloque = this.data[0];
              localStorage.setItem('nombreBloque', JSON.stringify(this.j_bloque));
              console.log(this.j_bloque);
            }
          
        }
      );
    }
    public ferme(dateDebut:string,dateFin:string) {
      this.formsService.readJoueur('joueur/ferme',dateDebut,dateFin).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              this.j_ferme = this.data[0];
              localStorage.setItem('nombreFerme', JSON.stringify(this.j_ferme));
              console.log(this.j_ferme);
            }
          
        }
      );
    }
    public sexe(dateDebut:string,dateFin:string) {
      this.formsService.readJoueur('joueur/sexe',dateDebut,dateFin).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              this.j_sexe_femme = this.data[0][0];
              this.j_sexe_homme = this.data[0][1];
              console.log(this.j_sexe_femme);
              console.log(this.j_sexe_homme);
              localStorage.setItem('femme', JSON.stringify(this.j_sexe_femme));
              localStorage.setItem('homme', JSON.stringify(this.j_sexe_homme));
            }
        }
      );
    }

    public age(dateDebut:string,dateFin:string) {
      this.formsService.readJoueur('joueur/age',dateDebut,dateFin).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              this.j_Age1=this.data[0][1];
              this.j_Age2=this.data[1][1];
              this.j_Age3=this.data[2][1];
              this.j_Age4=this.data[3][1];
              localStorage.setItem('age1', JSON.stringify(this.j_Age1));
              localStorage.setItem('age2', JSON.stringify(this.j_Age2));
              localStorage.setItem('age3', JSON.stringify(this.j_Age3));
              localStorage.setItem('age4', JSON.stringify(this.j_Age4));
              console.log("Age1"+this.j_Age1);
            }
        }
      );
    }

    public mois(annee:number) {
      this.formsService.readJoueurAnnee('joueur/mois',annee).subscribe(
        data => this.data = data,
        err => console.log("Erreur serveur"),
        () => {
            if (this.data[0] != null) {
              localStorage.setItem('mois', JSON.stringify(this.data));
            }
        }
      );
    }
  public listeMises(dateDebut:string,dateFin:string) {
    this.formsService.readListe('entreprise/mises',dateDebut,dateFin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeMises', JSON.stringify(this.data));
    
        }
      }
    );
  }

  public listeGains(dateDebut:string,dateFin:string) {
    this.formsService.readListe('entreprise/gains',dateDebut,dateFin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeGains', JSON.stringify(this.data));
    
        }
      }
    );
  }
}