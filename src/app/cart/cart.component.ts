import {Component, OnInit} from '@angular/core';
import {CartProducts} from '../shared/cart-products';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartProducts: CartProducts, private cartService: CartService) {
  }

  ngOnInit() {
    console.log(this.cartProducts.getCartProducts());
  }

  calculateTotalPrice() {
    const cartProducts = this.cartProducts.getCartProducts();
    let totalPrice = 0;
    let i;
    for (i = 0; i < cartProducts.length; i++) {
      totalPrice = totalPrice + cartProducts[i].price;
    }
    return totalPrice;


  }

  clearCart() {
    this.cartProducts.clearCartProducts();
  }

  buyProducts() {
    console.log(this.cartProducts.getCartProducts());
    console.log('Thank you for shopping with us');
    this.cartProducts.clearCartProducts();
  }
}
