import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DxPieChartModule } from 'devextreme-angular';
import { MedalsInfo, ChiffresService, UserData, ArchitectureInfo, itemInfo } from 'app/joueurs/service/chiffres.service';
import { Mois } from 'app/joueurs/model/Mois';
import { JoueursControl } from 'app/joueurs/control/joueurs.control';
import { DxPopupModule,DxChartModule, DxButtonModule , DxSelectBoxModule} from 'devextreme-angular';
import { PercentPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'chiffres-cmp',
    templateUrl: 'chiffres.component.html',
    styleUrls: ['chiffres.component.css'],
    providers: [ChiffresService,DatePipe]
})

export class ChiffresComponent implements OnInit{
    types: string[]= ["doughnut", "pie"];
    types1: string[] = ["spline","stepline","area","bar"];
    types2: number[] = [2017,2018];
  olympicMedals: MedalsInfo[];
  userData: UserData[];
  architecturesInfo: ArchitectureInfo[];
  data: itemInfo[];
  pipe: any = new PercentPipe("en-US");
  
//datetimepicker
debut: Date;
fin: Date;
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false,
    closeOnSelect: false
}


  constructor(public formsControl: JoueursControl,private service: ChiffresService,private datePipe:DatePipe) {
    }

    customizeLabel(arg) {
        return arg.valueText + " (" + arg.percentText + ")";
    }

    customizeTooltip(arg){
        return arg.valueText ;
    }
    
    customizeTooltip2 = (arg: any) => {
        return {
            text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
        };
    }
    
    customizeText(arg: any) {
        return "<span style='font-size: 28px'>" +
        arg.percentText +
        "</span><br/>" +
        arg.item.argument;
    }


    change(e:any){
this.formsControl.mois(e.itemData);
this.architecturesInfo=this.service.getArchitecturesInfo();
    }

    onDateSelect(){
        let D=this.datePipe.transform(this.debut,"yyyy-MM-dd");
        let F=this.datePipe.transform(this.fin,"yyyy-MM-dd");
        this.formsControl.actif(D,F);
        this.formsControl.inactif(D,F);
        this.formsControl.bloque(D,F);
        this.formsControl.ferme(D,F);
        this.formsControl.sexe(D,F);
        this.formsControl.age(D,F);

this.olympicMedals = this.service.getMedalsData();
this.userData=this.service.getUserData();
        this.data = this.service.getData();
    }
ngOnInit(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let dd2=String(dd);
    let mm2=String(mm);
    if(dd<10) {
         dd2 = '0'+dd
    } 
    if(mm<10) {
         mm2 = '0'+mm
    } 
    let today2 = yyyy+'/'+mm2 + '/' + dd2  ;
    this.formsControl.actif("2017/08/01",today2);
    this.formsControl.inactif("2017/08/01",today2);
    this.formsControl.bloque("2017/08/01",today2);
    this.formsControl.ferme("2017/08/01",today2);
    this.formsControl.sexe("2017/08/01",today2);
    this.formsControl.age("2017/08/01",today2);

    this.formsControl.mois(2017);
    this.architecturesInfo=this.service.getArchitecturesInfo();
this.olympicMedals = this.service.getMedalsData();
this.userData=this.service.getUserData();
    this.data = this.service.getData();

   
    }

}
