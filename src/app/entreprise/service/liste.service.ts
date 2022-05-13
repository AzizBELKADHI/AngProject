import { Injectable } from '@angular/core';
import { EntrepriseControl } from '../control/entreprise.control';


export class Methode {
    ID_Point_Vente?:number;
    Code_Point?:string;
    Raison_Sociale?:string;
    Nombre?:number;
    Montant?:number;
    Moyenne?:number;
}


export class Joueur {
    ID_Compte?: string;
    Nom?: string;
    Prenom?: string;
    Titulaire?: string;
    TotalMises?: number;
    TotalGain?: number;
    P_Voucher?:number;
    P_Bancaire?:number;
    Solde_Fin?:number;
    Date_Fin?:Date;
   }



   
 @Injectable()

 export class ListeService {
    listeNombre:any;
    listeMontant:any;
    listeRetrait:any;
    listeMG:any;
    listeSoldeDispo:any;
    
    joueursMG =[];
    joueursRetrait =[];
    joueursSoldeDispo =[];
    methodes =[];
   
    constructor(public entrepriseControl: EntrepriseControl) {}





    getJoueursSoldeDispo() {
        this.joueursSoldeDispo= [];
        this.listeSoldeDispo = JSON.parse(localStorage.getItem('listeSoldeDispo'));
        for (let i = 0; i < this.listeSoldeDispo.length; i++) {
            let joueur = {
                ID_Compte: this.listeSoldeDispo[i][0],
                Prenom: this.listeSoldeDispo[i][1],
                Nom: this.listeSoldeDispo[i][2],
                Solde_Fin: Number(this.listeSoldeDispo[i][3]),
                Date_Fin: this.listeSoldeDispo[i][4]
            };
            this.joueursSoldeDispo.push(joueur);
        }
        localStorage.removeItem('listeSoldeDispo');
        console.log(this.joueursSoldeDispo.length);
        return this.joueursSoldeDispo;
    }






    getJoueursRetrait() {
        this.joueursRetrait= [];
        this.listeRetrait = JSON.parse(localStorage.getItem('listeRetrait'));
        for (let i = 0; i < this.listeRetrait.length; i++) {
            let joueur = {
                ID_Compte: this.listeRetrait[i][0],
                Titulaire: this.listeRetrait[i][1],
                P_Bancaire: Number(this.listeRetrait[i][2]),
            };
            this.joueursRetrait.push(joueur);
        }
        localStorage.removeItem('listeRetrait');
        console.log(this.joueursRetrait.length);
        return this.joueursRetrait;
    }

    getJoueursMG() {
        this.joueursMG= [];
        this.listeMG = JSON.parse(localStorage.getItem('listeMG'));
        for (let i = 0; i < this.listeMG.length; i++) {
            let joueur = {
                ID_Compte: this.listeMG[i][0],
                Nom: this.listeMG[i][1],
                Prenom: this.listeMG[i][2],
                TotalMises: Number(this.listeMG[i][3]),
                TotalGain: Number(this.listeMG[i][4]),
            };
            this.joueursMG.push(joueur);
        }
        localStorage.removeItem('listeMG');
        console.log(this.joueursMG.length);
        return this.joueursMG;
    }


    getMethode() {
        this.methodes= [];
        this.listeMontant = JSON.parse(localStorage.getItem('listeMontant'));
        this.listeNombre = JSON.parse(localStorage.getItem('listeNombre'));
        
        for (let i = 0; i < this.listeMontant.length; i++) {
            let methode = {
                ID_Point_Vente: this.listeMontant[i][0],
                Code_Point: this.listeMontant[i][1],
                Raison_Sociale: this.listeMontant[i][2],
                Nombre:  this.listeNombre[i][3],
                Montant: this.listeMontant[i][3],
                Moyenne: Number(this.listeNombre[i][3]/this.listeMontant[i][3]*100)
            };
            this.methodes.push(methode);
        }
        localStorage.removeItem('listeMontant');
        localStorage.removeItem('listeNombre');
        return this.methodes;
    }

    

}
