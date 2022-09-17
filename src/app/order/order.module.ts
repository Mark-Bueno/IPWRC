import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import { OrderOverviewComponent } from './order-overview/order-overview.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule
  ]
})
export class OrderModule {
}
