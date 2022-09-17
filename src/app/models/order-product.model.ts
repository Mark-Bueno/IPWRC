export class OrderProduct {
  constructor(public id: number, public orderId: number,
              public amount: number, public productName: string, public productPhoto: string, public productPrice: number) {
  }
}
