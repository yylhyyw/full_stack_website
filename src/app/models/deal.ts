import { DealLink } from './dealLink';

export class Deal {
  public title: string;
  public deallinks: any[];
  public warehouse: string;
  public price: number;
  public quantity: number;
  public description: string;
  constructor() {
    this.title = '';
    this.deallinks = [];
    this.warehouse = '';
    this.price = 0;
    this.quantity = 0;
    this.description = '';
  }
}
