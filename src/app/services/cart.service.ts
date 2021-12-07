import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart.model';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  cart: Cart;

  getCartByUser(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl + '/users/' + userId, this.tokenService.getAuthorizationHeader());
  }

  addProductInCart(userId: number, productId: number): Observable<Cart> {
    return this.http.post<Cart>(this.baseUrl + '/users/' + userId + '/products/' + productId, {},
      this.tokenService.getAuthorizationHeader());
  }

  clearProductsInCart(userId: number): Observable<Cart> {
    return this.http.delete<Cart>(this.baseUrl + '/users/' + userId, this.tokenService.getAuthorizationHeader());
  }

}
