import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Cart} from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts = [];
  totalPrice = 0.00;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getCartByUser(1).subscribe(
      (carts: Cart[]) => {
        this.cartProducts = carts;
        console.log(carts);
        this.totalPrice = this.calculateTotalPrice();
      }
    );
  }

  calculateTotalPrice() {
    const cartProducts = this.cartProducts;
    let totalPrice = 0;
    let i;
    for (i = 0; i < cartProducts.length; i++) {
      totalPrice = totalPrice + cartProducts[i].product.price;
    }
    return totalPrice;


  }

  clearCart() {
    this.cartProducts = [];
  }

  buyProducts() {
  }
}
