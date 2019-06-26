export class Register {
    public FirstName: string;
    public LastName: string;
    public email: string;
    public password: string;
    constructor(FirstName = '', LastName = '', email = '', password = '') {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.email = email;
        this.password = password;
     }
}
