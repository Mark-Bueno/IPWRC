import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {CartService} from '../services/cart.service';
import {GlobalVariables} from '../shared/global-variables';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService, cartService: CartService, private globals: GlobalVariables) {
  }

  ngOnInit() {
    this.globals.setPage('products');
    this.productService.getAll()
      .subscribe((products: Product[]) => this.products = products.sort((a, b) => (
        a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
  }

  goToProductInformation(product): void {
    this.router.navigate(['/products/' + product.id], {state: {data: product}});
  }
}
