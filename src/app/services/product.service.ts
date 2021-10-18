import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {
  }

  product: Product;

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id);
  }
}
