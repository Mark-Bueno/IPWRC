import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  public product;
  public productId;
  public productNotFound = false;

  constructor(private router: Router, private productService: ProductService,
              private route: ActivatedRoute, private cartService: CartService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.productService.getProductById(params.id)
        .subscribe(
          (product: Product) => {
            this.product = product;
            if (product === null) {
              this.productNotFound = true;
            }
          });
    });
  }

  addToCart() {
    this.cartService.addProductInCart(this.productId).subscribe(() => {
      this.goToCart();
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
