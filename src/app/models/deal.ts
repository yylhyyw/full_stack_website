import { DealLink } from './dealLink';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Deal {
  public title: string;
  public deallinks: any[];
  public warehouse: string;
  public price: number;
  public quantity: number;
  public description: string;
  public updatedAt: string;
  public dealId: number;
  constructor(
    title: string,
    deallinks: any[],
    warehouse: string,
    price: number,
    quantity: number,
    description: string,
    updatedAt: string = '',
    dealId: number = 0.1
  ) {
    this.dealId = dealId;
    this.title = title;
    this.deallinks = deallinks;
    this.warehouse = warehouse;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.updatedAt = new Date().toLocaleString();
  }
}
