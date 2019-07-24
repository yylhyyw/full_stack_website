export class Inbound {
  public product: string;
  public price: string;
  public quantity: number;
  public warehouse: string;
  public company: string;
  public individual: string;
  public status: number;
  public companyStatus: number;
  public dealId: number;
  public propose: number;
  public proposeStatus: number;
  constructor(
    product: string,
    price: string,
    quantity: number,
    warehouse: string,
    company: string,
    individual: string,
    status: number,
    companyStatus: number,
    dealId: number,
  ) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.warehouse = warehouse;
    this.company = company;
    this.individual = individual;
    this.status = status;
    this.companyStatus = companyStatus;
    this.dealId = dealId;
  }

  public clear() {
    this.product = '';
    this.price = '';
    this.quantity = null;
    this.warehouse = '';
    this.company = '';
    this.individual = '';
    this.status = null;
    this.companyStatus = null;
    this.dealId = null;
  }
}
