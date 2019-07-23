export class Deal {
  public id: number;
  public products: number;
  public productName: string;
  public price: string;
  public quantity: number;
  public quantityTaken: number;
  public expiresAt: string;
  public note: string;
  public serviceTag: boolean;
  public dealPublic: boolean;
  public notify: boolean;
  public creator: string;
  public members: string;
  constructor(
    products: number,
    productName: string,
    price: string,
    quantity: number,
    expiresAt: string,
    note: string,
    serviceTag: boolean,
    dealPublic: boolean,
    notify: boolean,
    creator: string
  ) {
    this.products = products;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
    this.expiresAt = expiresAt;
    this.note = note;
    this.serviceTag = serviceTag;
    this.dealPublic = dealPublic;
    this.notify = notify;
    this.creator = creator;
  }

  public clear() {
    this.products = null;
    this.productName = '';
    this.price = '';
    this.quantity = null;
    this.expiresAt = '';
    this.note = '';
    this.serviceTag = null;
    this.dealPublic = null;
    this.notify = null;
    this.creator = '';
    this.members = '';
  }
}
