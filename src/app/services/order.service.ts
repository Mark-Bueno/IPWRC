import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Order} from '../models/order.model';
import {OrderProduct} from '../models/order-product.model';
import {enviroment} from '../shared/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = `${enviroment.baseUrl}/api/orders`;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  order: Order;

  addNewOrder(order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order,
      this.authService.getAuthorizationHeader());
  }

  getUserOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl, this.authService.getAuthorizationHeader());
  }

  getUserOrderProducts(id): Observable<OrderProduct[]> {
    return this.http.get<OrderProduct[]>(this.baseUrl + '/' + id + '/products', this.authService.getAuthorizationHeader());
  }

}
