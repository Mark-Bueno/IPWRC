import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  public product;
  public productId;

  constructor(private router: Router, private productService: ProductService,
              private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.productService.getProductById(params.id)
        .subscribe(
          (product: Product) => {
            this.product = product;
          });
    });
  }

  addToCart() {
    this.cartService.addProductInCart(1, this.productId);
    this.goToCard();
  }

  goToCard() {
    this.router.navigate(['/cart']);
  }

}
