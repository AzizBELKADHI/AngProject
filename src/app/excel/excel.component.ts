import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import * as Chartist from 'chartist';
import 'chartist-plugin-zoom';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'excel-cmp',
    templateUrl: './excel.component.html',
    styleUrls: ['./excel.component.css']
})
export class ExcelComponent {
  constructor(private sanitizer: DomSanitizer) {
  }
  value: any[] = [];
  
   public edited = false;

  saveTodos(): void {
   //show box msg
   this.edited = true;
   //wait 3 Seconds and hide
   setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }.bind(this), 3000);
  }

  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
			case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
			case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
  }  
   
}
