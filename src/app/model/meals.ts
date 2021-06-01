
export interface IMeals {

    announcements: any[],
    meals: IMeal[]

  }
  
  export interface IMeal {
    id: number;
    date: string;
    name: string;
    price: IPrice;
    location: ILocation;
    time: string;
    lane: ILane;
    tags: ITags;
    special_tags: string[];
  }
  
 export interface IPrice {
    student: string;
    employee: string;
    guest: string;
  }
  
  export interface ILocation {
    id: number;
    name: string;
    address: IAddress;
    opening_hours: IOpening_hour[];
  }
  
 export interface IAddress {
    line1: string;
    line2: any;
    street: string;
    zip: string;
    city: string;
  }
  
  export interface IOpening_hour {
    time: string;
    start_day: number;
    end_day: number;
    start_time: string;
    end_time: string;
  }
  
  export interface ILane {
    id: number;
    name: string;
  }
  
  export interface ITags {
    categories: ICategorie[];
    allergens: IAllergen[];
    additives: IAdditive[];
    special: any[];
  }
  
  export interface ICategorie {
    id: string;
    name: string;
  }
  
  export interface IAllergen {
    id: string;
    name: string;
  }
  
  export interface IAdditive {
    id: string;
    name: string;
  }
  