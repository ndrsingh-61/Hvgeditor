import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReadjsonService {
baseUrl:string = "assets/svg-edit/node_modules/svgedit/editor/lib/shapelib/symbol.json";
readonly rooturl= "http://localhost:44311/api"
    constructor(private httpClient : HttpClient) {}
    get_jasondata(){
        return this.httpClient.get(this.baseUrl);
    }
    set_jsondata()
    {
      var myData={
        data:'abc'
      }
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          })
        };
          let body = JSON.stringify(myData);
          return this.httpClient.get('https://localhost:44311/weatherforecast');
    //  return this.httpClient.post("./abc.json", body);
    }
  }
