import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags:Tag[] = [];
  constructor(private FoodService:FoodService){}

  ngOnInit(): void {
    this.tags=this.FoodService.getAllTags();
  }

}
