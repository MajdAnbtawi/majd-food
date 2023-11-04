import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return[
      {
        id:1,
        name:'meat soup',
        price: 5,
        tags:['soup' , 'meat'],
        favorite: false,
        stars: 4.0,
        imageUrl:"/assets/images/food-1.jpg",
      },
      {
        id:2,
        name:'sandwich with beef greenery',
        price: 3,
        tags:['sandwich','beef'],
        favorite: false,
        stars: 3.0,
        imageUrl:"/assets/images/food-2.jpg",
      },
      {
        id:3,
        name:'pasta topped with tomato cheese herbs',
        price: 10,
        tags:['pasta'],
        favorite: false,
        stars: 5.0,
        imageUrl:"/assets/images/food-3.jpg",

      },
      {
        id:4,
        name:'pizza filled with tomatoes salami olives',
        price: 8,
        tags:['pizza','salami'],
        favorite: false,
        stars: 2.7,
        imageUrl:"/assets/images/food-4.jpg",
      },
      {
        id:5,
        name:'tasty beef burger',
        price: 12,
        tags:['burger','beef'],
        favorite: false,
        stars: 5.0,
        imageUrl:"/assets/images/food-5.jpg",
      }

    ]
  }
}
