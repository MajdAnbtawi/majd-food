import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
      this.foods= this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
    else if (params.tag) {
      this.foods=this.foodService.getAllFoodsByTag(params.tag);
    }
      else
    this.foods = this.foodService.getAll();
    })
  }

}
