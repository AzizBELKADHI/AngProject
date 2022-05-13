import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EntrepriseService } from '../service/entreprise.service';
import 'rxjs/add/operator/map';
import { Mois } from '../../joueurs/model/Mois';

@Injectable()
export class EntrepriseControl {
  constructor(private router: Router, private entrepriseService: EntrepriseService) { }

  data: any = null
e_mois=new Mois();
CA:any;
Sport:any;
Live:any;
Virtuel:any;
RunPay:any;
SobFlous:any;
pv1_mois=new Mois();
pv2_mois=new Mois();
Mise:any;
Gain:any;
public chiffreAffaireMois(annee:number) {
    this.entrepriseService.readChiffreAffaireMois('entreprise/chiffreAffaire',annee).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
          if (this.data[0] != null) {
            localStorage.setItem('CAmois', JSON.stringify(this.data));
          }
        
      }
    );
  }

  public chiffreAffaireTotal(debut:string,fin:string) {
    this.entrepriseService.readChiffreAffaireTotal('entreprise/CATotal',debut,fin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
          if (this.data[0] != null) {
            this.CA=this.data[0];
            localStorage.setItem('CAtotal', JSON.stringify(this.CA));
          }
        
      }
    );
  }

  public CAParCategorieJeu(debut:string,fin:string) {
    this.entrepriseService.readChiffreAffaireTotal('entreprise/CAParCategJeu',debut,fin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
          if (this.data[0] != null) {
            this.Sport=this.data[0][2];
            this.Live=this.data[0][3];
            this.Virtuel=this.data[0][4];
            localStorage.setItem('Sport', JSON.stringify(this.Sport));
            localStorage.setItem('Live', JSON.stringify(this.Live));
            localStorage.setItem('Virtuel', JSON.stringify(this.Virtuel));
          }
        
      }
    );
  }

  public PointVenteTotal(debut:string,fin:string) {
    this.entrepriseService.readChiffreAffaireTotal('entreprise/PointVenteTotal',debut,fin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
          if (this.data[0] != null) {
            this.SobFlous=this.data[0][1];
            this.RunPay=this.data[1][1];
            localStorage.setItem('Runpay', JSON.stringify(this.RunPay));
            localStorage.setItem('Sobflous', JSON.stringify(this.SobFlous));
          }
        
      }
    );
  }
  
 

  public MiseGain(debut:string,fin:string) {
    this.entrepriseService.readChiffreAffaireTotal('entreprise/MiseGain',debut,fin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
          if (this.data[0] != null) {
            this.Gain=this.data[0][0];
            this.Mise=this.data[0][1];
            localStorage.setItem('Gain', JSON.stringify(this.Gain));
            localStorage.setItem('Mise', JSON.stringify(this.Mise));
          }
        
      }
    );
  }

  public listeNombre(dateDebut:string,dateFin:string) {
    this.entrepriseService.readListe('entreprise/nombre',dateDebut,dateFin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeNombre', JSON.stringify(this.data));
    
        }
      }
    );
  }

  public listeMontant(dateDebut:string,dateFin:string) {
    this.entrepriseService.readListe('entreprise/montant',dateDebut,dateFin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeMontant', JSON.stringify(this.data));
    
        }
      }
    );
  }

   listeMG(dateDebut:string,dateFin:string) {
    this.entrepriseService.readListe('entreprise/mg',dateDebut,dateFin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeMG', JSON.stringify(this.data));
    
        }
      }
    );
  }

  listeRetrait(dateDebut:string,dateFin:string) {
    this.entrepriseService.readListe('entreprise/retrait',dateDebut,dateFin).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeRetrait', JSON.stringify(this.data));
    
        }
      }
    );
  }

  listeSoldeDispo() {
    this.entrepriseService.readListeSoldeDispo('entreprise/soldeDispo').subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
          localStorage.setItem('listeSoldeDispo', JSON.stringify(this.data));
    
        }
      }
    );
  }

}