import { Component, OnInit,ViewChild } from '@angular/core';
import { ChiffresService, CountryInfo, MedalsInfo, MaleAgeStructure, MiseGain } from 'app/entreprise/service/chiffres.service';
import { DxChartModule ,DxPieChartModule, DxSelectBoxModule,DxPolarChartModule } from 'devextreme-angular';
import { EntrepriseControl } from 'app/entreprise/control/entreprise.control';
import { DatePipe } from '@angular/common';

declare var require: any
declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'chiffres-cmp',
  templateUrl: './chiffres.component.html',
  styleUrls: ['./chiffres.component.css'],
  providers: [ChiffresService,DatePipe]
})
export class ChiffresComponent implements OnInit {
   // @ViewChild('pie') pie: DxPieChartComponent;

CA:any;
    types: number[] = [2017];
    types2: string[]  = ["pie", "doughnut"];

    types1: string[] = ["line","stepline","area","bar"];
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

//chart1
  miseGain: MiseGain[];
//cahrt2
  countriesInfo: CountryInfo[];
//chart3
dataSource: MaleAgeStructure[];

  //chart4
    olympicMedals: MedalsInfo[];
    
    constructor(private service: ChiffresService,public entrepriseControl:EntrepriseControl,private datePipe:DatePipe) {
    }
    customLabel(arg) {
        return arg.valueText + " (" + arg.percentText + ")";
    }
    pointClickHandler(arg) {
      arg.target.select();
  }
    customizeTooltip(arg: any) {
      return arg.valueText;
  }
  customizeLabel(point) {
    return point.argumentText + ": " + point.valueText ;
}

  valueCustomizeText(args: any) {
    return args.value;
}

change(e:any){
    this.entrepriseControl.chiffreAffaireMois(e.itemData);
    this.countriesInfo = this.service.getCountriesInfo();
}


onSeriesClick(e: any) {
    var series = e.target;
    if (series.isVisible()) {
        series.hide();
    } else {
        series.show();
    }
}
onDateSelect(){
    this.CA=null;
    let D=this.datePipe.transform(this.debut,"yyyy/MM/dd");
    let F=this.datePipe.transform(this.fin,"yyyy/MM/dd");
    this.CA= JSON.parse(localStorage.getItem('CAtotal'))+" TND";
this.entrepriseControl.chiffreAffaireTotal(D,F);
this.entrepriseControl.CAParCategorieJeu(D,F);
this.entrepriseControl.MiseGain(D,F);
this.entrepriseControl.PointVenteTotal(D,F);

this.dataSource = this.service.getMaleAgeData();
this.miseGain=this.service.getMiseGain();
this.olympicMedals = this.service.getMedalsData();
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


        this.entrepriseControl.CAParCategorieJeu("2017/08/01",today2);
        this.entrepriseControl.MiseGain("2017/08/01",today2);
        this.entrepriseControl.PointVenteTotal("2017/08/01",today2);
        this.entrepriseControl.chiffreAffaireMois(2017);

        this.countriesInfo = this.service.getCountriesInfo();
        this.dataSource = this.service.getMaleAgeData();
        this.miseGain=this.service.getMiseGain();
        this.olympicMedals = this.service.getMedalsData();
    }
}
