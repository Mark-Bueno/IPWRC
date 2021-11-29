import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient) {
  }

  cart: Cart;

  getCartByUser(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl + '/' + userId);
  }

}
