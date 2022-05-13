import { Injectable } from '@angular/core';
import { JoueursControl } from 'app/joueurs/control/joueurs.control';
import { Mois } from 'app/joueurs/model/Mois';

export class MedalsInfo {
    sexe: string;
    nbJoueur: number;
}

export class UserData {
    age: string;
    number: number;
}
export class ArchitectureInfo {
    mois: string;
    nombreJ: number;
}

export class itemInfo {
    argument: string;
    value: number;
}


@Injectable()

export class ChiffresService {
    femme: any;
    homme: any;
    Age1: any;
    Age2: any;
    Age3: any;
    Age4: any;
    j_mois: Mois;
    nombreActif: any;
    nombreInactif: any;
    nombreBloque: any;
    nombreFerme: any;
    nbJoueurMoisTAB = [];
    dataNbJoueurMois: any;
    nb:number=12
    constructor(public joueursControl: JoueursControl) {
    }


    getMedalsData(): MedalsInfo[] {
        
        this.femme = JSON.parse(localStorage.getItem('femme'));
        this.homme = JSON.parse(localStorage.getItem('homme'));
        var medals: MedalsInfo[] = [{
            sexe: "Femme",
            nbJoueur: this.femme
        }, {
            sexe: "Homme",
            nbJoueur: this.homme
        }];
        localStorage.removeItem('homme');
        localStorage.removeItem('femme');
        return medals;
    }

    getUserData(): UserData[] {
        
        this.Age1 = JSON.parse(localStorage.getItem('age1'));
        this.Age2 = JSON.parse(localStorage.getItem('age2'));
        this.Age3 = JSON.parse(localStorage.getItem('age3'));
        this.Age4 = JSON.parse(localStorage.getItem('age4'));
        var userData: UserData[] = [{
            age: "18-35",
            number: this.Age3
        }, {
            age: "36-50",
            number: this.Age1
        }, {
            age: "51-60",
            number: this.Age2
        }, {
            age: "60+",
            number: this.Age4
        }];
        localStorage.removeItem('age1');
        localStorage.removeItem('age2');
        localStorage.removeItem('age3');
        localStorage.removeItem('age4');
        return userData;
    }

    getArchitecturesInfo(): ArchitectureInfo[] {

        this.nbJoueurMoisTAB=[];
        for (let i = 0; i < this.nb ; i++) {
             this.nbJoueurMoisTAB.push(0);
         }
        this.dataNbJoueurMois = JSON.parse(localStorage.getItem('mois'));
        for (let i = 0; i < this.dataNbJoueurMois.length ; i++) {
            let n=this.dataNbJoueurMois[i][0].substring(5,this.dataNbJoueurMois[i][1].length)-1;
            console.log(n);
                this.nbJoueurMoisTAB[n]=this.dataNbJoueurMois[i][1];
        }

        let architecturesInfo: ArchitectureInfo[] = [{
            mois: "Janvier",
            nombreJ: this.nbJoueurMoisTAB[0]
        }, {
            mois: "Fevrier",
            nombreJ: this.nbJoueurMoisTAB[1]
        }, {
            mois: "Mars",
            nombreJ: this.nbJoueurMoisTAB[2]
        }, {
            mois: "Avril",
            nombreJ: this.nbJoueurMoisTAB[3]
        }, {
            mois: "Mai",
            nombreJ: this.nbJoueurMoisTAB[4]
        }, {
            mois: "Juin",
            nombreJ: this.nbJoueurMoisTAB[5]
        }, {
            mois: "Juillet",
            nombreJ: this.nbJoueurMoisTAB[6]
        }, {
            mois: "Aout",
            nombreJ: this.nbJoueurMoisTAB[7]
        }, {
            mois: "Septembre",
            nombreJ: this.nbJoueurMoisTAB[8]
        }, {
            mois: "Octobre",
            nombreJ: this.nbJoueurMoisTAB[9]
        }, {
            mois: "Novembre",
            nombreJ: this.nbJoueurMoisTAB[10]
        }, {
            mois: "Decembre",
            nombreJ: this.nbJoueurMoisTAB[11]
        }];
        localStorage.removeItem('mois');
        return architecturesInfo;
    }

   
    getData(): itemInfo[] {
        this.nombreActif = JSON.parse(localStorage.getItem('nombreActif'));
        this.nombreInactif = JSON.parse(localStorage.getItem('nombreInactif'));
        this.nombreBloque = JSON.parse(localStorage.getItem('nombreBloque'));
        this.nombreFerme = JSON.parse(localStorage.getItem('nombreFerme'));

        var data: itemInfo[] = [
            { argument: "Compte Actif", value: this.nombreActif },
            { argument: "Compte Bloqué", value: this.nombreBloque },
            { argument: "Compte Inactif", value: this.nombreInactif},
            { argument: "Compte Fermé", value: this.nombreFerme }
        ];

        localStorage.removeItem('nombreActif');
        localStorage.removeItem('nombreInactif');
        localStorage.removeItem('nombreBloque');
        localStorage.removeItem('nombreFerme');
        return data;
    }
}