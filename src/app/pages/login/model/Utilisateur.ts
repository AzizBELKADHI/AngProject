export class Utilisateur {

constructor (public id?: number,
    public nom?: string,
    public prenom?: string,
    public email?: string,
    public date_inscrit?: String,
    public pseudo?: string,
    public mdp?: string,
    public etat_compte?: string,
    public type_compte?: string,
    public avatar?:Blob ){}
} 