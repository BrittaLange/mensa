import { Injectable } from '@angular/core';
import { Locus } from '../model/locus';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  idOfLocation: number = 106;
  //time: string = "noon";

  DateObj = new Date();

  today = this.DateObj.getFullYear() + '-' + ('0' + (this.DateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + this.DateObj.getDate()).slice(-2);

  private url = "https://sls.api.stw-on.de/v1/location/"+ this.idOfLocation + "/menu/"+ this.today + "?time=noon";

  private url1 = "https://sls.api.stw-on.de/v1/location/106/menu/2021-05-31?time=noon";

  public getLocation(loc: Locus) {
    this.idOfLocation = loc.id;
    this.url = "https://sls.api.stw-on.de/v1/location/"+ this.idOfLocation + "/menu/"+ this.today + "?time=noon";
    console.log(this.idOfLocation);
    return this.idOfLocation;
  }
  public getUrl() {
    return this.url;
  }
}
