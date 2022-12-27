import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orderProducts = [];
  totalPrice = 0;
  order = null;

  constructor(public dialogRef: MatDialogRef<InvoiceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.orderProducts = this.data.orderProducts;
    this.totalPrice = this.calculateTotalPrice();
    this.order = this.data.order;
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
