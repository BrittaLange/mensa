import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IMeals } from '../model/meals';
import { Menu } from '../model/menu';
import { UrlService } from './url.service';

// Decorator that marks a class as available to be provided and injected as a dependency.(https://angular.io/api/core/Injectable)
@Injectable({
  providedIn: 'root'
})
export class MensaService {

  json:IMeals[] = [];
  menus = [] as any;
  resultMeals = [];
  resultLanes = [];
  resultPrices = [];

  constructor(private http: HttpClient, private urlservice: UrlService) {
  }

  // Data sent by top-bar, recieved by menu-list

  public getData() {
    this.clearArray<any>(this.menus);
    this.clearArray<any>(this.resultLanes);
    this.clearArray<any>(this.resultMeals);
    this.clearArray<any>(this.resultPrices);
    //console.log('data sent');
    //console.log(this.menus);

    this.http.get(this.urlservice.getUrl()).toPromise().then(data => {
      this.json = <any>data;
      //console.log(this.json);
      this.findProperty(this.json, 'lane', 'name', this.resultLanes);
      this.findProperty(this.json, 'meals', 'name', this.resultMeals);
      this.findProperty(this.json, 'price', 'guest', this.resultPrices);
      
      //console.log(this.resultMeals);
      for (let i = 0; i < this.resultMeals.length; i++){
        this.menus[i] = new Menu(this.resultLanes[i], this.resultMeals[i], this.resultPrices[i]);
      }   
    });
    return this.menus;
  }

  private clearArray<T>(array: T[]) {
    while (array.length) {
      array.pop();
    }
  }
  
  private findProperty(rootObj: any, objToFind: any, label: any, result:any[]) {        

    for(var elements in rootObj){
        if(typeof rootObj[elements] === 'object') 
        {
            if (elements === objToFind){
                //console.log(rootObj[elements]);
                //console.log(rootObj);
                //console.log(elements);
                if(Array.isArray(rootObj[elements])){
                    //console.log('ich bin ein array ');
                    for(let i = 0; i < rootObj[elements].length; i++){
                        //console.log(rootObj[elements][i][label]);
                        result.push(rootObj[elements][i][label]);
                    }
                }
                else{  
                    //console.log('ich bin kein array');
                    result.push(rootObj[elements][label]);
                }
            }
            this.findProperty(rootObj[elements], objToFind, label, result);
        }          
    }
  };
}
