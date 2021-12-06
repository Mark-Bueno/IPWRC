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
  userId = 1;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.getCartProducts();
  }

  calculateTotalPrice() {
    const cartProducts = this.cartProducts;
    let totalPrice = 0;
    let i;
    for (i = 0; i < cartProducts.length; i++) {
      totalPrice = totalPrice + cartProducts[i].product.price * cartProducts[i].amount;
    }
    return totalPrice;


  }

  getCartProducts() {
    this.cartService.getCartByUser(this.userId).subscribe(
      (carts: Cart[]) => {
        this.cartProducts = carts;
        this.totalPrice = this.calculateTotalPrice();
      }
    );
  }

  clearCart() {
    this.cartService.clearProductsInCart(this.userId).subscribe(() => {
      this.getCartProducts();
    });
  }

  buyProducts() {
  }
}
