import { Injectable } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { ReclamationControl } from 'app/reclamation/control/reclamation.control';

export class Reclamation {
    ID: number;
    Type: string;
    Nombre: number;
    Date_Reclamation: string;
}

export class TypeRec {
    Name: string;
}

let states: TypeRec[] = [{
    "Name": "Annulation prélèvement par Voucher"
}, {
    "Name": "Les cartes de recharge"
}, {
    "Name": "Les problèmes des machines RUNPAY"
}, {
    "Name": "Récupération mot de passe compte bountou"
}];

export class itemInfo {
    argument: string;
    value: number;
}



@Injectable()
export class ReclamationService {
    reclamation = [];
    listeReclamation: any;
    valeurRec = [];
    listeRec: any;
    constructor(public reclamationControl: ReclamationControl) { }

    getReclamation() {
        this.reclamation = [];
        this.listeReclamation = JSON.parse(localStorage.getItem('listeRec'));
        for (let i = 0; i < this.listeReclamation.length; i++) {
            let employees = {
                ID: this.listeReclamation[i]["id_Reclamation"],
                Type: this.listeReclamation[i]["type"],
                Nombre: this.listeReclamation[i]["nombre"],
                Date_Reclamation: this.listeReclamation[i]["date_Reclamation"]
            };
            this.reclamation.push(employees);
        }
        console.log(this.reclamation.length)
        console.log(this.reclamation[0])
        localStorage.removeItem('listeRec');
        return this.reclamation;

    }
    getTypeRec() {
        return states;
    }

    getData(): itemInfo[] {
        this.valeurRec = [];
        this.listeRec = JSON.parse(localStorage.getItem('listeRecDate'));
        for (let i = 0; i < this.listeRec.length; i++) {
            this.valeurRec.push(this.listeReclamation[i]["nombre"]);
        }
        let data: itemInfo[] = [
            { argument: "Annulation prélèvement par Voucher", value: this.valeurRec[0] },
            { argument: "Les cartes de recharge", value: this.valeurRec[1] },
            { argument: "Les problèmes des machines RUNPAY", value: this.valeurRec[2] },
            { argument: "Récupération mot de passe compte bountou", value: this.valeurRec[3] }
        ];
        localStorage.removeItem('listeRecDate');
        return data;
    }
}