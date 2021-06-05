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
  
  /**
   * 
   * Function that gets data by http-request, finds the properties lane.name, meals.name and price.guest, 
   * creates Menu-Objects out of them und returns an array with the menus of today and of the location that was clicked in the
   * top-bar-component.
   * 
   * @returns an array of Menu-Objects.
   */
  public getData() {
    // Clearing all arrays from old data
    this.clearArray<any>(this.menus);
    this.clearArray<any>(this.resultLanes);
    this.clearArray<any>(this.resultMeals);
    this.clearArray<any>(this.resultPrices);
    // Getting the data from stwon-API asynchronously
    this.http.get(this.urlservice.getUrl()).toPromise().then(data => {
      this.json = <any>data;
      // Finding the properties lane.name, meals.name and price.guest and store them in one array for each property. 
      this.findProperty(this.json, 'lane', 'name', this.resultLanes);
      this.findProperty(this.json, 'meals', 'name', this.resultMeals);
      this.findProperty(this.json, 'price', 'guest', this.resultPrices);
      // Creating Menu-Objects from the found poperties und storing them in the array menus
      for (let i = 0; i < this.resultMeals.length; i++){
        this.menus[i] = new Menu(this.resultLanes[i], this.resultMeals[i], this.resultPrices[i]);
      }   
    })
    .catch(error => alert(error.message));
    return this.menus;
  }

  /**
   * 
   * Clearing an array from all data.
   * 
   * @param array Array to be cleared.
   */
  private clearArray<T>(array: T[]) {
    while (array.length) {
      array.pop();
    }
  }
  
  /**
   * 
   * Recursive function to find specific properties by labels in a json-object.
   * 
   * @param rootObj - the object that is going to be searched.
   * @param objToFind - the object in the rootObj to be found.
   * @param label - the label/property of the objToFind.
   * @param result - the found properties are stored in this array.
   */
  private findProperty(rootObj: any, objToFind: any, label: any, result:any[]) {        

    for(var elements in rootObj){
        if(typeof rootObj[elements] === 'object') 
        {
            if (elements === objToFind){
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
