import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {GlobalVariables} from '../../shared/global-variables';
import {MatDialog} from "@angular/material/dialog";
import {OrderProductListComponent} from "../order-product-list/order-product-list.component";

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {

  orders = [];

  constructor(private orderService: OrderService, private globals: GlobalVariables, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.globals.setPage('my-orders');
    this.orderService.getUserOrders().subscribe((orders) => {
      this.orders = orders;
      console.log(orders);
    });
  }

  getOrderProducts(order) {
    this.orderService.getUserOrderProducts(order.id).subscribe((orderProducts) => {
      this.dialog.closeAll();
      const dialogRef = this.dialog.open(OrderProductListComponent, {
        width: '600px',
        data: {orderProducts, orderId: order.id},
        hasBackdrop: true
      });
    });
  }
}
