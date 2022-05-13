import { NgModule, Component, ViewChildren, enableProdMode, QueryList } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ListeService, Methode, Joueur } from 'app/entreprise/service/liste.service';
import { DxDataGridComponent, DxButtonComponent } from 'devextreme-angular';
import { EntrepriseControl } from '../control/entreprise.control';



declare var $: any;

@Component({
    selector: 'liste-cmp',
    templateUrl: 'liste.component.html',
    providers: [ListeService,DatePipe]
})




export class ListeComponent implements OnInit {
    @ViewChildren(DxDataGridComponent) dataGrids: QueryList<DxDataGridComponent>
    
    dateD: Date;
    dateF: Date;

    ListeMethode: Methode[];
    ListeMG: Joueur[];
    ListeRetrait: Joueur[];
    ListeSoldeDispo: Joueur[];

    saleAmountHeaderFilter: any;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false,
        closeOnSelect: false
    }


    constructor(public service: ListeService, public formsControl: EntrepriseControl, public datePipe: DatePipe) {
        this.showFilterRow = true;
        this.showHeaderFilter = true;
    }



    ngOnInit() { 
        this.formsControl.listeSoldeDispo();
        this.ListeSoldeDispo = this.service.getJoueursSoldeDispo();
    };



    onDateSelect() {
        let D = this.datePipe.transform(this.dateD, "yyyy/MM/dd");
        let F = this.datePipe.transform(this.dateF, "yyyy/MM/dd");
        console.log(D + "+" + F)
        this.formsControl.listeMontant(D, F);
        this.formsControl.listeNombre(D, F);
        this.formsControl.listeMG(D,F);
        this.formsControl.listeRetrait(D,F);
                
        this.ListeMethode = this.service.getMethode();
        this.ListeMG = this.service.getJoueursMG();
        this.ListeRetrait=this.service.getJoueursRetrait();
        //localStorage.clear();
        //while(this.joueurs.length > 0) {this.joueurs.pop();}
    }



    calculateSelectedRow(options) {
        if (options.name === "SelectedRowsSummary") {
            if (options.summaryProcess === "start") {
                options.totalValue = 0;
            } else if (options.summaryProcess === "calculate") {
                if (options.component.isRowSelected(options.value.ID_Compte)) {
                    options.totalValue = options.totalValue + options.value.Solde_Fin;
                }
            }
        }
    }
    calculateSummary() {
        this.dataGrids.forEach(function (dataGrid) {
            dataGrid.instance.refresh();
        })
    }

}