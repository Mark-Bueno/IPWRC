import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule
  ]
})
export class CartModule {
}
