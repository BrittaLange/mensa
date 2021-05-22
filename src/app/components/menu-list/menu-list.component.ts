import { Component, OnInit } from '@angular/core';
import { MensaService } from 'src/app/services/mensa.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  title = "Menü-Liste";

  today: number = Date.now();

  meals = [] as any;

  constructor(private service: MensaService) { }

  ngOnInit(): void {
    this.meals = this.service.getMeals();
  }

}
