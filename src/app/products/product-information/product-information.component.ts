import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartProducts} from '../../shared/cart-products';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  public product;
  public productId;

  constructor(private router: Router, private cartProducts: CartProducts, private productservice: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.productservice.getProductById(params.id)
        .subscribe(
          (product: Product) => {
            this.product = product;
          });
    });
  }

  addToCart(product) {
    this.cartProducts.addProduct(product);
    this.goToCard();
  }

  goToCard() {
    this.router.navigate(['/cart']);
  }

}
