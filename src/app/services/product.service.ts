import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {enviroment} from '../shared/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = `${enviroment.baseUrl}/api/products`;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  product: Product;

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl, this.authService.getAuthorizationHeader());
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id, this.authService.getAuthorizationHeader());
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product, this.authService.getAuthorizationHeader());
  }

  copyProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + '/copy', product, this.authService.getAuthorizationHeader());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + '/' + id, this.authService.getAuthorizationHeader());
  }

  editProduct(product: Product) {
    return this.http.put<Product>(this.baseUrl, product, this.authService.getAuthorizationHeader());
  }
}
