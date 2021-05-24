import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';

// Decorator that marks a class as available to be provided and injected as a dependency.(https://angular.io/api/core/Injectable)
@Injectable({
  providedIn: 'root'
})
export class MensaService {

  /*
  meals = [
    {"meal": "Essen 1", "name": "Pommes frites", "price": "2.00" },
    {"meal": "Essen 2", "name": "Hähnchenschnitzel mit Champignonsauce und Pommes frites", "price": "5.60" },
    {"meal": "Essen 3", "name": "Currywurst mit Currysauce 1997 classic und Pommes frites", "price": "5.60" },
    {"meal": "Essen 4", "name": "Gebackenes Seelachsfilet mit Remoulade und Kartoffelsalat", "price": "5.80" }
  ];
*/

  json = {
    "announcements":[],
    "meals":[
      {"id":15023,"date":"2021-05-26","name":"Pommes frites","price":{"student":"1.60","employee":"2.00","guest":"2.00"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":10,"name":"Essen 1"},"tags":{"categories":[{"id":"VEGA","name":"Vegan"}],"allergens":[],"additives":[],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15020,"date":"2021-05-26","name":"H\u00e4hnchenschnitzel mit Champignonsauce und Pommes frites","price":{"student":"3.30","employee":"4.85","guest":"5.60"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":20,"name":"Essen 2"},"tags":{"categories":[{"id":"GEFL","name":"Gefl\u00fcgel"}],"allergens":[{"id":"ML","name":"enth\u00e4lt Milch u Milcherzeugnisse(inkl. Laktose)"},{"id":"GL1","name":"GL namentlich Weizen"}],"additives":[{"id":"1","name":"mit Farbstoff"}],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15022,"date":"2021-05-26","name":"Currywurst mit Currysauce 1997 classic und Pommes frites","price":{"student":"3.30","employee":"4.85","guest":"5.60"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":30,"name":"Essen 3"},"tags":{"categories":[{"id":"SCHW","name":"Schwein"},{"id":"RIND","name":"Rind"}],"allergens":[{"id":"SL","name":"enth\u00e4lt Sellerie und Sellerieerzeugnisse"},{"id":"SF","name":"enth\u00e4lt Senf und Senferzeugnisse"}],"additives":[{"id":"2","name":"mit Konservierungsstoff"},{"id":"3","name":"mit Antioxidationsmittel"},{"id":"8","name":"mit Phosphat"},{"id":"60","name":"mit einer Zuckerart und S\u00fc\u00dfungsmitteln"}],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15102,"date":"2021-05-26","name":"Erbsensuppe mit Kasseler, Wiener W\u00fcrstchen und Baguette","price":{"student":"1.70","employee":"3.25","guest":"4.00"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":40,"name":"Essen 4"},"tags":{"categories":[{"id":"SCHW","name":"Schwein"},{"id":"RIND","name":"Rind"}],"allergens":[{"id":"SL","name":"enth\u00e4lt Sellerie und Sellerieerzeugnisse"},{"id":"GL1","name":"GL namentlich Weizen"},{"id":"GL2","name":"GL namentlich Roggen"}],"additives":[{"id":"2","name":"mit Konservierungsstoff"},{"id":"3","name":"mit Antioxidationsmittel"},{"id":"8","name":"mit Phosphat"}],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15094,"date":"2021-05-26","name":"Ofenkartoffel mit Fr\u00fchlingsquark und Grillgem\u00fcse","price":{"student":"3.00","employee":"4.55","guest":"5.30"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":50,"name":"Essen 5"},"tags":{"categories":[{"id":"VEGT","name":"Vegetarisch"}],"allergens":[{"id":"ML","name":"enth\u00e4lt Milch u Milcherzeugnisse(inkl. Laktose)"}],"additives":[],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15096,"date":"2021-05-26","name":"Balkangem\u00fcse","price":{"student":"0.70","employee":"0.90","guest":"0.90"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":110,"name":"Gem\u00fcse"},"tags":{"categories":[{"id":"VEGA","name":"Vegan"}],"allergens":[],"additives":[],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15097,"date":"2021-05-26","name":"Gurkensalat mit saurer Sahne","price":{"student":"0.70","employee":"0.90","guest":"0.90"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":110,"name":"Gem\u00fcse"},"tags":{"categories":[{"id":"VEGT","name":"Vegetarisch"}],"allergens":[{"id":"ML","name":"enth\u00e4lt Milch u Milcherzeugnisse(inkl. Laktose)"},{"id":"SW","name":"enth\u00e4lt Schwefeldioxid u Sulfite(>10mg\/kg o.mg\/l )"}],"additives":[{"id":"3","name":"mit Antioxidationsmittel"},{"id":"5","name":"geschwefelt"}],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]},
      {"id":15021,"date":"2021-05-26","name":"Pommes frites","price":{"student":"0.80","employee":"1.00","guest":"1.00"},"location":{"id":106,"name":"Cafeteria Mensa 2 TU BS","address":{"line1":"Cafeteria Mensa 2 TU BS","line2":null,"street":"Beethovenstra\u00dfe 15","zip":"38106","city":"Braunschweig"},"opening_hours":[{"time":"noon","start_day":1,"end_day":5,"start_time":"11:00:00","end_time":"14:15:00"},{"time":"morning","start_day":1,"end_day":5,"start_time":"08:00:00","end_time":"11:00:00"}]},"time":"noon","lane":{"id":160,"name":"Beilage"},"tags":{"categories":[{"id":"VEGA","name":"Vegan"}],"allergens":[],"additives":[],"special":[]},"special_tags":["Deprecated. Use tags\u2192special instead."]}]};

  menu = new Menu("essen1", "2.00");

  menus = [] as any;
  mealArr: string[] = [];
  priceArr: string[] = [];

  constructor() { }
  
  getMenus() {
    this.getMeals();
    this.getPrice();
    console.log(this.mealArr.length);
    for (let i = 0; i < this.mealArr.length; i++){
      this.menus[i] = new Menu(this.mealArr[i], this.priceArr[i]);
      console.log(this.mealArr[i]);
    }  
    return this.menus;
  }

  getMeals() {
    this.mealArr = this.json.meals.map(item => item.name);
    //return this.json.meals.map(item => item.name);
  }

  getPrice() {
    this.priceArr = this.json.meals.map(item => item.price.guest);
    //return this.json.meals.map(item => item.price.guest);
  }

}
