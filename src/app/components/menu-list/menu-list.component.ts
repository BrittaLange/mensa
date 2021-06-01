import { Component, OnInit } from '@angular/core';
import { IMeals } from 'src/app/model/meals';

import { MensaService } from 'src/app/services/mensa.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  title = "Menü-Liste";

  public today: number = Date.now();

  menus =  [] as any;

  // Wenn top-bar die Location sendet, muss die menu-list getData ausführen oder getData muss vom Service gepusht werden.

  constructor(private service: MensaService) {
   }

  ngOnInit(): void {

    this.menus = this.service.getData();
    console.log(this.menus);
    console.log(typeof(this.menus));
    
  }

  
}
