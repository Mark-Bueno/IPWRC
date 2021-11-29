import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material';
import {ProductInformationComponent} from './product-information/product-information.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ProductsComponent, ProductInformationComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule
  ]
})
export class ProductsModule {
}
