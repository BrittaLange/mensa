import { Component, OnInit } from '@angular/core';

import { Locus } from 'src/app/model/locus';
import { MensaService } from 'src/app/services/mensa.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  // Locus-Objekt um Ort und id an Service zu senden
  // Quelle: curl "https://sls.api.stw-on.de/v1/location"
  mensa1: Locus = new Locus(101, 'Mensa 1');
  mensa2: Locus = new Locus(105, 'Mensa 2');
  cafeMensa2: Locus = new Locus(106, 'Cafeteria Mensa 2');

  // When starting the app, first location shown is Cafeteria Mensa 2
  location: Locus  = this.cafeMensa2;

  statusMensa1: boolean;
  statusMensa2: boolean;
  statusCafeMensa2: boolean;

  //DateObj = new Date();
  //today = this.DateObj.getFullYear() + '-' + ('0' + (this.DateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + this.DateObj.getDate()).slice(-2);

  constructor(private urlservice: UrlService, private service: MensaService) {
    this.location = this.cafeMensa2;
    this.statusMensa1 = false;
    this.statusMensa2 = false;
    this.statusCafeMensa2 = true;
   }

  ngOnInit(): void {
   this.urlservice.getLocation(this.location);
  }

  setLocation(loc:Locus) {
    this.setButtonColor(loc);
    this.location = loc;
    this.urlservice.getLocation(this.location);
    console.log(this.location);
    this.service.getData();
  }

  setButtonColor(loc:Locus) {
    if(loc.id == 101){
      this.statusMensa1 = true;
      this.statusMensa2 = false;
      this.statusCafeMensa2 = false;
    }
    if(loc.id == 105){
      this.statusMensa1 = false;
      this.statusMensa2 = true;
      this.statusCafeMensa2 = false;
    }
    if(loc.id == 106){
      this.statusMensa1 = false;
      this.statusMensa2 = false;
      this.statusCafeMensa2 = true;
    }
  }
}
