import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartProducts {
  constructor() {

  }

  localStorage = window.localStorage;
  cartProducts = this.fillCartProducts();

  fillCartProducts() {
    if (this.localStorage.getItem('cartProducts') !== null) {
      console.log(JSON.parse(this.localStorage.getItem('cartProducts')));
      return JSON.parse(this.localStorage.getItem('cartProducts'));
    } else {
      return [];
    }
  }

  addListToLocalStorage(list) {
    this.localStorage.setItem('cartProducts', JSON.stringify(list));
  }

  getCartProducts() {
    return JSON.parse(this.localStorage.getItem('cartProducts'));
  }

  addProduct(product) {
    this.cartProducts.push(product);
    this.addListToLocalStorage(this.cartProducts);
  }

  clearCartProducts() {
    this.localStorage.setItem('cartProducts', JSON.stringify([]));
  }

}
