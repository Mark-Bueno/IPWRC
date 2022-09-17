export class Order {
  constructor(public id: number, public address: string,
              public zipcode: string, public total: number, public userId: number, public date: string) {
  }
}
