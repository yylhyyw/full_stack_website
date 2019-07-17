export class Subscription {
  public individual: number;
  public company: number;
  public status: number;
  constructor(individual: number, company: number, status: number) {
    this.company = company;
    this.individual = individual;
    this.status = status;
  }
}
