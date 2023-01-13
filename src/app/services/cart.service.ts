import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart.model';
import {AuthService} from './auth.service';
import {environment} from '../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = `${environment.baseUrl}/api/carts`;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  cart: Cart;

  getCartByUser(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl, this.authService.getAuthorizationHeader());
  }

  addProductInCart(productId: number): Observable<Cart> {
    return this.http.post<Cart>(this.baseUrl + '/' + productId, {},
      this.authService.getAuthorizationHeader());
  }

  clearProductsInCart(): Observable<Cart> {
    return this.http.delete<Cart>(this.baseUrl, this.authService.getAuthorizationHeader());
  }

  deleteProductInCart(productId): Observable<Cart> {
    return this.http.delete<Cart>(this.baseUrl + '/' + productId, this.authService.getAuthorizationHeader());
  }

}
