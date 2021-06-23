import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import {Observable, observable} from 'rxjs';


import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanheiroService {

apiurl = environment.api;
private headers = new HttpHeaders({
  'x-api-key': environment.token
})
 constructor(
   private httpclient: HttpClient
  ) { }

  public getCompanheiro(breed_id: any):Observable<any> {
    return this.httpclient.get(this.apiurl + 'images/search?limit=8&size=full&breed_id='+breed_id, {headers: this.headers});
  }
  public getRacas():Observable<any> {
    return this.httpclient.get(this.apiurl + 'breeds', {headers: this.headers});
  }
}
