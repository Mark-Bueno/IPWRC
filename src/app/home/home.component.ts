import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index = 0;
  products = [];
  username = '';

  constructor(private productsService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }


  getSlideTrackWidth() {
    return this.products.length * 2;
  }

  goToProduct(product) {
    this.router.navigate(['/products/' + product.id], {state: {data: product}}).then();
  }
}
