import { Component, OnInit } from '@angular/core';

import { MensaService } from 'src/app/services/mensa.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  title = "Menü-Liste";

  // App shows menus for today only
  public today: number = Date.now();

  menus =  [] as any;

  // Wenn top-bar die Location sendet, pusht die Methode getData vom Service die neuen Daten an die menu-list.

  constructor(private service: MensaService) {
   }

  ngOnInit(): void {
    //console.log('init menulist');
    this.menus = this.service.getData();
    //console.log(this.menus);
    //console.log(typeof(this.menus));
  }  
}
