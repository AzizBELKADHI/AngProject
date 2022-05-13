import { Injectable } from '@angular/core';
import { JoueursControl } from '../control/joueurs.control';



export class Joueur {
    ID_Compte?: string;
    Nom?: string;
    Prenom?: string;
    NombreMises?: number;
    TotalMises?: number;
    MoyenneMises?: number;
    NombreGain?: number;
    TotalGain?: number;
    MoyenneGains?: number;
}

 @Injectable()
export class ListeService {
    listeMises:any;
    listeGains:any;
    joueursMises =[];
    joueursGains =[];
   
    constructor(public joueursControl: JoueursControl) {
       
    }

    getJoueursMises() {
        this.joueursMises= [];
        this.listeMises = JSON.parse(localStorage.getItem('listeMises'));
        for (let i = 0; i < this.listeMises.length; i++) {
            let joueur = {
                ID_Compte: this.listeMises[i][0],
                Nom: this.listeMises[i][1],
                Prenom: this.listeMises[i][2],
                NombreMises:  this.listeMises[i][3],
                TotalMises: Number(this.listeMises[i][4]),
                MoyenneMises: Number(this.listeMises[i][3]/this.listeMises[i][4]*100)
            };
            this.joueursMises.push(joueur);
        }
        localStorage.removeItem('listeMises');
        console.log(this.joueursMises.length);
        return this.joueursMises;
    }

    getJoueursGains() {
        this.joueursGains= [];
        this.listeGains = JSON.parse(localStorage.getItem('listeGains'));
        for (let i = 0; i < this.listeGains.length; i++) {
            let joueur = {
                ID_Compte: this.listeGains[i][0],
                Nom: this.listeGains[i][1],
                Prenom: this.listeGains[i][2],
                NombreGains:  this.listeGains[i][3],
                TotalGains: Number(this.listeGains[i][4]),
                MoyenneGains: Number(this.listeGains[i][3]/this.listeGains[i][4]*100)
            };
            this.joueursGains.push(joueur);
        }
        localStorage.removeItem('listeGains');
        console.log(this.joueursGains.length);
        return this.joueursGains;
    }


}
