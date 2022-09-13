import {Component, OnInit} from '@angular/core';
import {GlobalVariables} from '../../shared/global-variables';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  product: Product;

  constructor(private globals: GlobalVariables, private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.globals.setPage('productAdd');
    this.productForm = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      productPhoto: new FormControl(),
      productDescription: new FormControl()
    });
  }

  addProduct() {
    const name = this.productForm.controls.productName.value;
    const price = this.productForm.controls.productPrice.value;
    const photo = this.productForm.controls.productPhoto.value;
    const description = this.productForm.controls.productDescription.value;
    this.product = new Product(null, name, photo, price, description);
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['../../../products']).then();
    });
  }
}
