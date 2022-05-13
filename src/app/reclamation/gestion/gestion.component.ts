import { Component, OnInit, ViewChildren } from '@angular/core';
import { DxDataGridComponent, DxButtonComponent } from 'devextreme-angular';
import { ReclamationService, Reclamation, TypeRec, itemInfo } from 'app/reclamation/service/reclamation.service';
import { RecService } from 'app/reclamation/service/rec.service';
import { ReclamationControl } from 'app/reclamation/control/reclamation.control';
import { DxFunnelModule,DxPolarChartModule, DxSelectBoxModule  } from 'devextreme-angular';
import { Reclam } from "app/reclamation/model/Reclam";
import { DatePipe } from '@angular/common';

declare var $: any;

@Component({
    selector: 'gestion-cmp',
    templateUrl: './gestion.component.html',
    styleUrls: ['gestion.component.css'],
    providers: [ReclamationService,DatePipe]
})

export class GestionComponent implements OnInit {
    @ViewChildren(DxDataGridComponent) dataGrids: DxDataGridComponent
    statusCode: number;
    dataSource: Reclamation[];
    states: TypeRec[];
    events: Array<string> = [];
    data: itemInfo[];
    Type:any;
    Nombre:any;
debut: Date;
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false,
        closeOnSelect: false
    }
    constructor(public reclamationService: ReclamationService, private recService: RecService, public reclamationControl: ReclamationControl,private datePipe:DatePipe) {
    }

    onDateSelect(){
        let D=this.datePipe.transform(this.debut,"yyyy-MM-dd");
        this.reclamationControl.listeReclamationByDate(D);
        this.data=this.reclamationService.getData();
    }
    


    onRowUpdating(e: any) {
        this.Nombre=e.newData.Nombre;
        this.Type=e.newData.Type;
        
        if(this.Nombre==undefined){
            this.Nombre=e.oldData.Nombre;
        }
        if(this.Type==undefined){
            this.Type=e.oldData.Type;
        }
        
      console.log("ID "+e.oldData.ID+ "Nombre "+this.Nombre+"Type "+ this.Type+"Date "+ e.oldData.Date_Reclamation);
       let reclamation = new Reclam(this.Type,this.Nombre,e.oldData.Date_Reclamation,e.oldData.ID);
       console.log("Bonjour "+JSON.stringify(reclamation))
       this.recService.updateReclamation('reclamation/reclamation',reclamation)
            .subscribe(successCode => {
                this.statusCode = successCode;
            },
            errorCode => this.statusCode = errorCode);
            window.alert("Réclamation modifiée avec succès");
        }

    onRowInserting(e: any) {
        let reclamation = new Reclam(e.data.Type,e.data.Nombre,  null,null);
        console.log("Bonjour "+JSON.stringify(reclamation))
        this.recService.createReclamation('reclamation/reclamation', reclamation)
            .subscribe(successCode => {
                this.statusCode = successCode;
            },
            errorCode => this.statusCode = errorCode);
            window.alert("Réclamation ajoutée avec succès");
        }

    removeReclamation(e: any) {
        this.reclamationControl.deleteReclamation(e.data.ID);
        window.alert("Réclamation supprimée avec succès");
    }

    ngOnInit() {
        this.reclamationControl.listeReclamation();
        this.dataSource = this.reclamationService.getReclamation();
        this.states = this.reclamationService.getTypeRec();
      
    }
    
    customizeText(arg: any) {
        return "<span style='font-size: 28px'>" +
        arg.valueText +
        "</span><br/>" +
        arg.item.argument;
    }



}
