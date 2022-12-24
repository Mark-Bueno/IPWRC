import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product = new Product(0, '', '', 0, '');
  productId: number;

  constructor(private productService: ProductService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      productPhoto: new FormControl(),
      productDescription: new FormControl()
    });
    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.productService.getProductById(params.id)
        .subscribe(
          (product: Product) => {
            this.product = product;
          }, () => {
            this.router.navigate(['/404']).then();
          });
    });
  }

  editProduct() {
    this.productService.editProduct(this.product).subscribe(() => {
      this.router.navigate(['../products']).then();
    });

  }

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(() => {
        this.router.navigate(['../../../products']).then();
      }
    );
  }

}
