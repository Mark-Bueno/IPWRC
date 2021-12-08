import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Cart} from '../models/cart.model';
import {GlobalVariables} from '../shared/global-variables';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts = [];
  totalPrice = 0.00;
  userId = 0;

  constructor(private cartService: CartService, private globalVariables: GlobalVariables, private authService: AuthService) {
  }

  ngOnInit() {
    this.globalVariables.setPage('cart');
    this.userId = Number(this.authService.retrieveUserId());
    console.log(this.userId);
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
