import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {OrderOverviewComponent} from './order-overview/order-overview.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {CartProductListComponent} from './cart-product-list/cart-product-list.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderOverviewComponent,
    InvoiceComponent,
    CartProductListComponent,
    InvoiceComponent
  ],
  entryComponents: [InvoiceComponent, CartProductListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class OrderModule {
}
