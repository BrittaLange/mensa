import { Injectable } from '@angular/core';

// Decorator that marks a class as available to be provided and injected as a dependency.(https://angular.io/api/core/Injectable)
@Injectable({
  providedIn: 'root'
})
export class MensaService {

  meals = [
    {"meal": "Essen 1", "name": "Pommes frites", "price": "2.00" },
    {"meal": "Essen 2", "name": "Hähnchenschnitzel mit Champignonsauce und Pommes frites", "price": "5.60" },
    {"meal": "Essen 3", "name": "Currywurst mit Currysauce 1997 classic und Pommes frites", "price": "5.60" },
    {"meal": "Essen 4", "name": "Gebackenes Seelachsfilet mit Remoulade und Kartoffelsalat", "price": "5.80" }
  ];

  constructor() { }
  
  getMeals() {
    return this.meals;
  }


}
