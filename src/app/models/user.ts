export class User {
    constructor(
        public email: string,
        public password: string,
        public permission: string = null
      ) {}
}
