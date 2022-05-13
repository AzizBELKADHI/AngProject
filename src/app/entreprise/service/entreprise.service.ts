import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



const API_URL = "http://localhost:8080";
@Injectable()

export class EntrepriseService {
    constructor(public http: Http) { }
    HEADER = { headers: new Headers({ 'Content-Type': 'application/json', }) };

    public readListe(resource, debut, fin) {
        console.log(`${API_URL}/${resource}?debut=${debut}&fin=${fin}`);
        return this.http.get(`${API_URL}/${resource}?debut=${debut}&fin=${fin}`, this.HEADER)
            .map(res => res.json());
    }

    public readListeSoldeDispo(resource) {
        console.log(`${API_URL}/${resource}`);
        return this.http.get(`${API_URL}/${resource}`, this.HEADER)
            .map(res => res.json());
    }

    public readChiffreAffaireTotal(resource, debut, fin) {
        console.log(`${API_URL}/${resource}?debut=${debut}&fin=${fin}`);
        return this.http.get(`${API_URL}/${resource}?debut=${debut}&fin=${fin}`, this.HEADER)
            .map(res => res.json());
    }

    public readChiffreAffaireMois(resource, annee) {
        console.log(`${API_URL}/${resource}?annee=${annee}`);
        return this.http.get(`${API_URL}/${resource}?annee=${annee}`, this.HEADER)
            .map(res => res.json());
    }

    public readPointVenteTotal(resource, annee) {
        console.log(`${API_URL}/${resource}?annee=${annee}`);
        return this.http.get(`${API_URL}/${resource}?annee=${annee}`, this.HEADER)
            .map(res => res.json());
    }
}



