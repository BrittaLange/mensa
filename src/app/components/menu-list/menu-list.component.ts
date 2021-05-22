import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  title = "Menü-Liste";

  today: number = Date.now();

  meals = [
    {"meal": "Essen 1", "name": "Pommes frites", "price": "2.00" },
    {"meal": "Essen 2", "name": "Hähnchenschnitzel mit Champignonsauce und Pommes frites", "price": "5.60" },
    {"meal": "Essen 3", "name": "Currywurst mit Currysauce 1997 classic und Pommes frites", "price": "5.60" },
    {"meal": "Essen 4", "name": "Gebackenes Seelachsfilet mit Remoulade und Kartoffelsalat", "price": "5.80" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
