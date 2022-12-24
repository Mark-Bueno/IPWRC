import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {CartService} from '../services/cart.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  role = '';
  isAdmin = false;
  productsOnPage = 0;

  constructor(private router: Router, private productService: ProductService, cartService: CartService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(async (user) => {
      this.role = user.role;
      this.checkIfAdmin();
    });
    this.getProducts();
  }

  sortProducts(products) {
    products.sort((a, b) => (
      a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return products;
  }

  getProducts() {
    this.productService.getAll()
      .subscribe((products: Product[]) => {
        this.products = this.sortProducts(products);
        this.productsOnPage = products.length;
      });
  }

  goToProductInformation(product): void {
    this.router.navigate(['/products/' + product.id], {state: {data: product}}).then();
  }

  goToProductAdd(): void {
    this.router.navigate(['/admin/products/add']).then();
  }

  checkIfAdmin(): void {
    if (this.role === 'admin') {
      this.isAdmin = true;
    }
  }

  goToProductEdit(product): void {
    this.router.navigate(['/admin/products/' + product.id], {state: {data: product}}).then();
  }

  deleteProduct(product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
        this.getProducts();
      }
    );
  }

  copyProduct(product) {
    this.productService.copyProduct(product).subscribe(() => {
      this.getProducts();
    });
  }
}
