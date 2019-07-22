export class Product {
  public id: string;
  public name: string;
  public condition: string;
  public msrp: string;
  public asin: string;
  public upc: string;
  public weight: string;
  public note: string;
  public creator: string;
  constructor(
    name: string,
    condition: string,
    msrp: string,
    asin: string,
    upc: string,
    weight: string,
    note: string,
    creator: string
  ) {
    this.name = name;
    this.condition = condition;
    this.msrp = msrp;
    this.asin = asin;
    this.upc = upc;
    this.weight = weight;
    this.note = note;
    this.creator = creator;
  }
  /**
   * name
   */
  public clear() {
    this.name = '';
    this.condition = '';
    this.msrp = '';
    this.asin = '';
    this.upc = '';
    this.weight = '';
    this.note = '';
    this.creator = '';
  }
}
