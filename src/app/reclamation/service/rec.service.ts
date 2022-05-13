import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Reclam } from "app/reclamation/model/Reclam";

const API_URL = "http://localhost:8080";
@Injectable()
export class RecService {
    headers: Headers;
    constructor(public http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }

    HEADER = { headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) };
    options: RequestOptions;

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


    public readReclamation(resource) {
        console.log(`${API_URL}/${resource}`);
        return this.http.get(`${API_URL}/${resource}`, this.HEADER)
            .map(res => res.json());
    }

    public readReclamationByDate(resource,date) {
        console.log(`${API_URL}/${resource}?date=${date}`);
        return this.http.get(`${API_URL}/${resource}?date=${date}`, this.HEADER)
            .map(res => res.json());
    }

    public deleteReclamation(resource, id) {
        return this.http
            .delete(`${API_URL}/${resource}?id=${id}`, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public createReclamation(resource, reclamation: Reclam) {
        console.log(`${API_URL}/${resource}`);
        return this.http.post(`${API_URL}/${resource}`, JSON.stringify(reclamation), this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public updateReclamation(resource, reclamation: Reclam) {
        return this.http.patch(`${API_URL}/${resource}`, reclamation)
        .map(success => success.status)
        //.catch(this.handleError);
    }
}



