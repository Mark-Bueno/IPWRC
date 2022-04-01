import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Cart} from '../models/cart.model';
import {GlobalVariables} from '../shared/global-variables';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts = [];
  totalPrice = 0.00;

  constructor(private cartService: CartService, private globalVariables: GlobalVariables) {
  }

  ngOnInit() {
    this.globalVariables.setPage('cart');
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
    this.cartService.getCartByUser().subscribe(
      (carts: any[]) => {
        this.cartProducts = carts.sort((a, b) => (
          a.product.name > b.product.name) ? 1 : ((b.product.name > a.product.name) ? -1 : 0));
        this.totalPrice = this.calculateTotalPrice();
      }
    );
  }

  clearCart() {
    this.cartService.clearProductsInCart().subscribe(() => {
      this.getCartProducts();
    });
  }

  buyProducts() {
  }

  addProduct(productId: number) {
    this.cartService.addProductInCart(productId).subscribe(() => {
      this.getCartProducts();
    });
  }

  removeProduct(productId: number) {
    this.cartService.deleteProductInCart(productId).subscribe(() => {
      this.getCartProducts();
    });
  }
}
