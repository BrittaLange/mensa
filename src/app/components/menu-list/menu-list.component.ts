import { Component, OnInit } from '@angular/core';

import { MensaService } from 'src/app/services/mensa.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  title = "Menü-Liste";

  menus =  [] as any;

  // Wenn top-bar die Location sendet, muss die Methode getData muss vom Service gepusht werden.

  constructor(private service: MensaService) {
   }

  ngOnInit(): void {
    console.log('init menulist');
    this.menus = this.service.getData();
    console.log(this.menus);
    console.log(typeof(this.menus));
  }
}
