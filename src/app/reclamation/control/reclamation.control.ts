import { Injectable } from "@angular/core";
import { RecService } from "app/reclamation/service/rec.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ReclamationControl {
    constructor(private router: Router, private rec:RecService ) { }
    
  data: any = null;

  public listeReclamation() {
    this.rec.readReclamation('reclamation/reclamation').subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
            localStorage.setItem('listeRec', JSON.stringify(this.data));
            console.log(this.data)
        }
      }
    );
  }

  public listeReclamationByDate(date:string) {
    this.rec.readReclamationByDate('reclamation/reclamationDate',date).subscribe(
      data => this.data = data,
      err => console.log("Erreur serveur"),
      () => {
        if (this.data != null) {
            localStorage.setItem('listeRecDate', JSON.stringify(this.data));
            console.log(this.data)
        }
      }
    );
  }
    
  public deleteReclamation(id:number) {
    this.rec.deleteReclamation('reclamation/reclamation',id).subscribe(
      result => console.log(result),
      err => console.log("Erreur serveur")
);  
  }

}