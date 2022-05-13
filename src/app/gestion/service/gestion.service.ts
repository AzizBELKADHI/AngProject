import { Injectable } from '@angular/core';
import { GestionControl } from 'app/gestion/control/gestion.control';

export class Employee {
    ID: number;
    Pseudo: string;
    Mdp: string;
    Nom: string;
    Prenom: string;
    Email: string;
    EtatCompte: string;
    TypeCompte: string;
    DateInscrit: String;
}

export class State {
    Name: string;
}



let etat: State[] = [{
    "Name": "Actif"
}, {
    "Name": "Inactif"
}];

let type: State[] = [{
    "Name": "ROLE_Administrateur"
}, {
    "Name": "ROLE_AgentCommercial"
},{
    "Name": "ROLE_AgentMarketing"
},{
    "Name": "ROLE_CommunityManager"
}];

@Injectable()
export class GestionService {
    user = [];
    listeUser: any;

    constructor(public gestionControl: GestionControl) { }


    getEmployees() {
        this.user = [];
        this.listeUser = JSON.parse(localStorage.getItem('listeUser'));
        for (let i = 0; i < this.listeUser.length; i++) {
            let employees = {
                ID: this.listeUser[i]["id"],
                Pseudo: this.listeUser[i]["pseudo"],
                Mdp: this.listeUser[i]["mdp"],
                Nom: this.listeUser[i]["nom"],
                Prenom: this.listeUser[i]["prenom"],
                Email: this.listeUser[i]["email"],
                EtatCompte: this.listeUser[i]["etat_compte"],
                TypeCompte: this.listeUser[i]["type_compte"],
                DateInscrit: this.listeUser[i]["date_inscrit"]
            };
            this.user.push(employees);
        }
        console.log(this.user.length)
        console.log(this.user[0])
        localStorage.removeItem('listeUser');
        return this.user;
    }
    getEtat() {
        return etat;
    }
    getType() {
        return type;
    }
}