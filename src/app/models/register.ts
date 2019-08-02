export class Register {
  public username: string;
  public phone: string;
  public email: string;
  public password: string;
  constructor(username = '', phone = '', email = '', password = '') {
    this.username = username;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
  public clear() {
    this.username = '';
    this.phone = '';
    this.email = '';
    this.password = '';
  }
}
