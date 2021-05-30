import { Component, OnInit } from '@angular/core';
import { Locus } from 'src/app/model/locus';
import { MensaService } from 'src/app/services/mensa.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public locCafeMensa2: string = "Cafeteria Mensa 2";
  public locMensa1: string = "Mensa 1";
  public locMensa2: string = "Mensa 2";

  public location: string  = "Cafeteria Mensa 2";

  DateObj = new Date();
  today = this.DateObj.getFullYear() + '-' + ('0' + (this.DateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + this.DateObj.getDate()).slice(-2);

  // ToDo: Locus-Objekt um Ort und Zeit an Service zu senden
  mensa1: Locus = new Locus(101, 'Mensa 1');
  mensa2: Locus = new Locus(105, 'Mensa 2');
  cafeMensa2: Locus = new Locus(106, 'Cafeteria Mensa 2');

  constructor(private service: MensaService) {

   }

  ngOnInit(): void {
    this.service.getLocation(this.location);
  }

  setLocation(loc:string) {
    this.location = loc;
    this.service.getLocation(this.location);
    console.log(this.location);
  }

}
