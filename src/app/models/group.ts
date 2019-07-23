export class Group {
  public id: number;
  public name: string;
  public creator: string;
  public member: string;
  constructor(name: string, creator: string, member: string) {
    this.id = null;
    this.name = name;
    this.creator = creator;
    this.member = member;
  }
  /**
   * name
   */
  public clear() {
    this.id = null;
    this.name = '';
    this.creator = '';
    this.member = '';
  }
}
