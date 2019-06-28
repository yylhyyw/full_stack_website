import { DealLink } from './dealLink';

export class Deal {
  public title: string;
  public deallinks: any[];
  public warehouse: string;
  public price: number;
  public quantity: number;
  public description: string;
  constructor(
    title: string,
    deallinks: any[],
    warehouse: string,
    price: number,
    quantity: number,
    description: string
  ) {
    this.title = title;
    this.deallinks = deallinks;
    this.warehouse = warehouse;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}
