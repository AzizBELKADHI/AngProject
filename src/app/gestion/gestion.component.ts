import { NgModule, Component, ViewChildren, enableProdMode, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { GestionService, State, Employee } from 'app/gestion/service/gestion.service';
import { DxDataGridComponent, DxButtonComponent } from 'devextreme-angular';
import { GestionControl } from 'app/gestion/control/gestion.control';
import { AuthService } from 'app/pages/login/service/auth.service';
import { Utilisateur } from 'app/pages/login/model/Utilisateur';


declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'gestion-cmp',
    templateUrl: 'gestion.component.html',
    styleUrls: ['gestion.component.css'],
    providers: [GestionService]
})

export class GestionComponent implements OnInit {
    @ViewChildren(DxDataGridComponent) dataGrids: DxDataGridComponent
    statusCode: number;
    users: Employee[];
    etat: State[];
    type: State[];
    Nom:any;
    Prenom:any;
    Email:any;
    Pseudo:any;
    Mdp:any;
    EtatCompte:any;
    TypeCompte:any;


    keyExpr: Array<string> = [];
    constructor(private auth: AuthService, public service: GestionService, public gestionControl: GestionControl) {

    }

    logEvent(e: any) {
       this.gestionControl.deleteUser(e.data.Pseudo);
       window.alert("Compte supprimé avec succès");
    }


    onRowUpdating(e: any) {
        this.Nom=e.newData.Nom;
        this.Prenom=e.newData.Prenom;
        this.Email=e.newData.Email;
        this.Pseudo=e.newData.Pseudo;
        this.Mdp=e.newData.Mdp;
        this.EtatCompte=e.newData.EtatCompte;
        this.TypeCompte=e.newData.TypeCompte;

        if(this.Nom==undefined){
            this.Nom=e.oldData.Nom;
        }
        if(this.Prenom==undefined){
            this.Prenom=e.oldData.Prenom;
        }
        if(this.Pseudo==undefined){
            this.Pseudo=e.oldData.Pseudo;
        }
        if(this.Email==undefined){
            this.Email=e.oldData.Email;
        }
        if(this.Mdp==undefined){
            this.Mdp=e.oldData.Mdp;
        }
        if(this.TypeCompte==undefined){
            this.TypeCompte=e.oldData.TypeCompte;
        }
        if(this.EtatCompte==undefined){
            this.EtatCompte=e.oldData.EtatCompte;
        }
      console.log("ID "+e.oldData.ID+ "Nom "+this.Nom+"Prenom "+ this.Prenom+"Email "+ this.Email+"Pseudo "+this.Pseudo+"Mdp "+this.Mdp+"Etat "+ this.EtatCompte+ "Type "+this.TypeCompte);
       let user = new Utilisateur(e.oldData.ID, this.Nom, this.Prenom, this.Email,e.oldData.DateInscrit,this.Pseudo, this.Mdp, this.EtatCompte, this.TypeCompte);
        this.auth.update('pages/modifCompte', user)
            .subscribe(successCode => {
                this.statusCode = successCode;
            },
            errorCode => this.statusCode = errorCode);
            window.alert("Compte modifié avec succès");
    }

    onRowInserting(e: any) {
    console.log(e.data.Pseudo);
    let user = new Utilisateur(null,e.data.Nom, e.data.Prenom, e.data.Email,null,e.data.Pseudo, e.data.Mdp, e.data.EtatCompte, e.data.TypeCompte);
    console.log("Bonjour "+JSON.stringify(user))
    this.auth.create('pages/login', user)
        .subscribe(successCode => {
            this.statusCode = successCode;
        },
        errorCode => this.statusCode = errorCode);
        window.alert("Compte ajouté avec succès");
    }

    ngOnInit() {
        this.gestionControl.listeUser();
        this.users = this.service.getEmployees();
        this.etat = this.service.getEtat();
        this.type = this.service.getType();
    }




}
