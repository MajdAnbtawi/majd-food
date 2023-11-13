import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart!:Cart;
  constructor(private CartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {

  }
  removeFromCart (cartItem:CartItem){
    this.CartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string) {
    const quantity= parseInt(quantityInString);
    this.CartService.changeQuantity(cartItem.food.id , quantity);
    this.setCart();
  }
  setCart() {
    this.cart = this.CartService.getCart();
  }

}
