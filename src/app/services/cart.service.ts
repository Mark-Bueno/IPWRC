import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart.model';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  cart: Cart;

  getCartByUser(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl + '/' + userId, this.authService.getAuthorizationHeader());
  }

  addProductInCart(userId: number, productId: number): Observable<Cart> {
    return this.http.post<Cart>(this.baseUrl + '/' + userId + '/' + productId, {},
      this.authService.getAuthorizationHeader());
  }

  clearProductsInCart(userId: number): Observable<Cart> {
    return this.http.delete<Cart>(this.baseUrl + '/' + userId, this.authService.getAuthorizationHeader());
  }

  deleteProductInCart(userId: number, productId): Observable<Cart> {
    return this.http.delete<Cart>(this.baseUrl + '/' + userId + '/' + productId, this.authService.getAuthorizationHeader());
  }

}
