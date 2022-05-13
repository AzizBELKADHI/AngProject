import { Injectable } from '@angular/core';
import scheduler from 'devextreme/ui/scheduler';
import { Mois } from 'app/entreprise/model/Mois';
import { EntrepriseControl } from 'app/entreprise/control/entreprise.control';

export class MiseGain {
    MiseGain: string;
    TotalMiseGain: number;
}

export class CountryInfo {
    mois: string;
    nombre: number;

}

export class MedalsInfo {
    categorie: string;
    valeur: number;
}

export class MaleAgeStructure {
    methode: string;
    number: number;
}

@Injectable()
export class ChiffresService {
    nb:number=12;
    RunPay: any;
    SobFlous: any;
    e_mois: Mois;
    dataChiffAffaire: any;
    Sport: any;
    Live: any;
    Virtuel: any;
    Mise: any;
    Gain: any;
    chiffreAffaireTAB = [];

    constructor(public entrepriseControl: EntrepriseControl) {
    }



    getCountriesInfo(): CountryInfo[] {
        this.chiffreAffaireTAB=[];
        for (let i = 0; i < this.nb ; i++) {
             this.chiffreAffaireTAB.push(0);
         }
        this.dataChiffAffaire = JSON.parse(localStorage.getItem('CAmois'));
        
        for (let i = 0; i < this.dataChiffAffaire.length ; i++) {
            let n=this.dataChiffAffaire[i][1]-1;
            console.log(n);
                this.chiffreAffaireTAB[n]=this.dataChiffAffaire[i][0];
        }

        let countriesInfo: CountryInfo[] = [{
            mois: "Janvier",
            nombre: this.chiffreAffaireTAB[0]
        }, {
            mois: "Fevrier",
            nombre: this.chiffreAffaireTAB[1]
        }, {
            mois: "Mars",
            nombre: this.chiffreAffaireTAB[2]
        }, {
            mois: "Avril",
            nombre: this.chiffreAffaireTAB[3]
        }, {
            mois: "Mai",
            nombre: this.chiffreAffaireTAB[4]
        }, {
            mois: "Juin",
            nombre: this.chiffreAffaireTAB[5]
        }, {
            mois: "Juillet",
            nombre: this.chiffreAffaireTAB[6]
        }, {
            mois: "Aout",
            nombre: this.chiffreAffaireTAB[7]
        }, {
            mois: "Septembre",
            nombre: this.chiffreAffaireTAB[8]
        }, {
            mois: "Octobre",
            nombre: this.chiffreAffaireTAB[9]
        }, {
            mois: "Novembre",
            nombre: this.chiffreAffaireTAB[10]
        }, {
            mois: "Decembre",
            nombre: this.chiffreAffaireTAB[11]
        }];
        localStorage.removeItem('CAmois');
        return countriesInfo;
    }

    getMedalsData(): MedalsInfo[] {
        this.Sport = JSON.parse(localStorage.getItem('Sport'));
        this.Live = JSON.parse(localStorage.getItem('Live'));
        this.Virtuel = JSON.parse(localStorage.getItem('Virtuel'));
        var medals: MedalsInfo[] = [{
            categorie: "Sport",
            valeur: this.Sport
        }, {
            categorie: "Live",
            valeur: this.Live
        }, {
            categorie: "Virtuel",
            valeur: this.Virtuel
        }];
        localStorage.removeItem('Sport');
        localStorage.removeItem('Live');
        localStorage.removeItem('Virtuel');
        return medals;
    }

    getMaleAgeData(): MaleAgeStructure[] {
        this.RunPay = JSON.parse(localStorage.getItem('Runpay'));
        this.SobFlous = JSON.parse(localStorage.getItem('Sobflous'));
        var maleAgeData: MaleAgeStructure[] = [{
            methode: "Runpay",
            number: this.RunPay
        }, {
            methode: "Sobflous",
            number: this.SobFlous
        }, {
            methode: "Aetech",
            number: 0
        }, {
            methode: "Wowpay",
            number: 0
        }];
        localStorage.removeItem('Runpay');
        localStorage.removeItem('Sobflous');
        return maleAgeData;
    }

    getMiseGain(): MiseGain[] {
        this.Mise = JSON.parse(localStorage.getItem('Mise'));
        this.Gain = JSON.parse(localStorage.getItem('Gain'));
        var TotalMiseGain: MiseGain[] = [{
            MiseGain: "Mise",
            TotalMiseGain: this.Mise
        }, {
            MiseGain: "Gain",
            TotalMiseGain: this.Gain
        }];
        localStorage.removeItem('Mise');
        localStorage.removeItem('Gain');
        return TotalMiseGain;
    }
}
