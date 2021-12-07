import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  product: Product;

  getAll(): Observable<Product[]> {
    console.log(this.tokenService.getAuthorizationHeader());
    return this.http.get<Product[]>(this.baseUrl, this.tokenService.getAuthorizationHeader());
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id, this.tokenService.getAuthorizationHeader());
  }
}
