import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {Utilisateur} from "../model/Utilisateur";
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Options } from 'selenium-webdriver/chrome';


const API_URL="http://localhost:8080";

@Injectable()
export class AuthService {
  headers: Headers;
  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
this.options = new RequestOptions({ headers: this.headers });
  }

  HEADER = { headers: new Headers({'Content-Type' : 'application/json;charset=UTF-8'}) };
  options: RequestOptions;

  public setAuth(username, password) {
    var encodedString = btoa(username+':'+password);
    this.HEADER = { headers: new Headers(
      { 'Content-Type' : 'application/json','Authorization':'Basic '+encodedString})};
      console.log(encodedString)
  }
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


public readAll(resource) {
  console.log(`${API_URL}/${resource}`);
  return this.http.get(`${API_URL}/${resource}`, this.HEADER)
  .map(res => res.json());
    //.map(widgets => widgets.map(widget => Object.assign({}, widget, {img: `${IMG_URL}${widget.img}`})));
}

public read(resource, id) {
  console.log(`${API_URL}/${resource}=${id}`);
  return this.http.get(`${API_URL}/${resource}=${id}`, this.HEADER)
    .map(res => res.json());
}

public readMachines(resource) {
  console.log(`${API_URL}/${resource}`);
  return this.http.get(`${API_URL}/${resource}`, this.HEADER)
  .map(res => res.json());
    //.map(widgets => widgets.map(widget => Object.assign({}, widget, {img: `${IMG_URL}${widget.img}`})));
}

// fonction reset mail
public readMail(resource, id) {
  console.log(`${API_URL}/${resource}=${id}`);
  return this.http.get(`${API_URL}/${resource}=${id}`, this.HEADER)
    .map(res => res.json());
}


/*
public update(resource, item) {
  console.log(`${API_URL}/${resource}}`);
  return this.http.put(`${API_URL}/${resource}`, JSON.stringify(item), this.HEADER)
    .map(res => res.json())
    //.map(w => Object.assign({}, w, {img: `${IMG_URL}${w.img}`}));
}*/


public update(resource,user:Utilisateur) {
  var encodedString = btoa(user.pseudo+':'+user.mdp);
    this.HEADER = { headers: new Headers(
      { 'Content-Type' : 'application/json','Authorization':'Basic '+encodedString})};
  return this.http.patch(`${API_URL}/${resource}`, user)
        .map(success => success.status)
        //.catch(this.handleError);
} 

public delete(resource, pseudo) {
  return this.http
      .delete(`${API_URL}/${resource}?pseudo=${pseudo}`, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }  
   

  public create(resource, user:Utilisateur) {
    console.log(`${API_URL}/${resource}`);
    return this.http.post(`${API_URL}/${resource}`, JSON.stringify(user), this.options)
    .map(this.extractData)
    .catch(this.handleError);
  }

}
