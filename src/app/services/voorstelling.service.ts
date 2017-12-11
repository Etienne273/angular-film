import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {Voorstelling} from '../models/voorstelling.model';

@Injectable()
export class VoorstellingService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private voorstellingUrl = environment.serverUrl + '/'; // URL to web api
  private voorstellingen: Voorstelling[] = [];

  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getVoorstellingen(): Promise<Voorstelling[]> {
  
    return this.http.get(this.voorstellingUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Voorstelling[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getVoorstelling(_id: string): Promise<Voorstelling> {
    const url = `${this.voorstellingUrl}/${_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Voorstelling)
      .catch(this.handleError);
  }


  add(voorstelling: Voorstelling): Promise<Voorstelling>{
    return this.http.post(this.voorstellingUrl, JSON.stringify(voorstelling), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Voorstelling)
      .catch(this.handleError)
  }

  



  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
