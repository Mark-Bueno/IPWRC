import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {OrderOverviewComponent} from './order-overview/order-overview.component';
import {OrderProductListComponent} from './order-product-list/order-product-list.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    OrderComponent,
    OrderOverviewComponent,
    OrderProductListComponent
  ],
  entryComponents: [OrderProductListComponent],
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
