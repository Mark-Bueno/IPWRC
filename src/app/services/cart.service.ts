import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart.model';
import {EventEmitter} from 'events';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eventEmitter: EventEmitter = new EventEmitter();

  private baseUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient) {
  }

  cart: Cart;

  getCartByUser(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl + '/users/' + userId);
  }

  addProductInCart(userId: number, productId: number): Observable<Cart> {
    return this.http.post<Cart>(this.baseUrl + '/users/' + userId + '/products/' + productId, {});
  }

  clearProductsInCart(userId: number): Observable<Cart> {
    return this.http.delete<Cart>(this.baseUrl + '/users/' + userId);
  }

}
