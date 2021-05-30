import { Component, OnInit } from '@angular/core';

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

  constructor(private service: MensaService) {
   }

  ngOnInit(): void {
    console.log('hey!');
    this.menus = this.service.getData();
    console.log(this.menus);
    console.log(typeof(this.menus));
  }
}
