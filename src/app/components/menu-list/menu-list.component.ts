import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meals } from 'src/app/model/meals';
import { IMeal } from 'src/app/model/meals';
import { Menu } from 'src/app/model/menu';
import { JsonService } from 'src/app/services/json.service';
import { MensaService } from 'src/app/services/mensa.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  title = "Menü-Liste";

  today: number = Date.now();

  meals: string [] = [];

  prices: string [] = [];

  menus =  [] as any;


  constructor(private service: MensaService) {

   }

  ngOnInit(): void {
    /*this.meals = this.service.getMeals();
    this.prices = this.service.getPrice();
    this.menus.name = this.meals;
    this.menus.price = this.prices;
    console.log(this.menus);
*/
    this.menus = this.service.getMenus();
    console.log(this.menus);
    console.log(typeof(this.menus));
  }
  

}
