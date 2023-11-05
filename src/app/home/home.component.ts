import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll()
  }

}
