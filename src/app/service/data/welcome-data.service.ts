import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class HelloWorldBean {

  constructor(public message : string) {}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient : HttpClient) { }

  executeHellowWorldBeanService() {

    //console.log("Inside executeHellowWorldBeanService()");
    return this.httpClient.get<HelloWorldBean>('http://localhost:7879/hello-world');
  }

  executeHellowWorldBeanServiceWithPathVarable(name : string) {

    return this.httpClient.get<HelloWorldBean>(`http://localhost:7879/hello-world/path-variable/${name}`);
  }



}