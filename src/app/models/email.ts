export class Email {
  public emailList: string;
  public emailSubject: string;
  public emailText: string;
  constructor(emailList = null, emailSubject = null, emailText = null) {
    this.emailList = emailList;
    this.emailSubject = emailSubject;
    this.emailText = emailText;
  }

  clear() {
    this.emailList = null;
    this.emailSubject = null;
    this.emailText = null;
  }
}
