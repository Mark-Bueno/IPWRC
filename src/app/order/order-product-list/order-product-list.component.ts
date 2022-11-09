import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-order-product-list',
  templateUrl: './order-product-list.component.html',
  styleUrls: ['./order-product-list.component.css']
})
export class OrderProductListComponent implements OnInit {

  orderProducts = [];
  totalPrice = 0;
  orderId = 0;

  constructor(public dialogRef: MatDialogRef<OrderProductListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.orderProducts = this.data.orderProducts;
    this.totalPrice = this.calculateTotalPrice();
    this.orderId = this.data.orderId;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calculateTotalPrice() {
    const orderProducts = this.orderProducts;
    let totalPrice = 0;
    let i;
    for (i = 0; i < orderProducts.length; i++) {
      totalPrice = totalPrice + orderProducts[i].productPrice * orderProducts[i].amount;
    }
    return totalPrice;


  }

}
