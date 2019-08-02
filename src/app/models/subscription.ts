export class Subscription {
  public individual: string;
  public company: string;
  public status: number;
  constructor(individual: string, company: string, status: number) {
    this.company = company;
    this.individual = individual;
    this.status = status;
  }
}
