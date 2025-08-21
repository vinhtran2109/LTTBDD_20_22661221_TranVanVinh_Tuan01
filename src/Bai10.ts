export class Account {
    public username: string;
    private password: string;
    readonly id: number;

    constructor(username: string, password: string, id: number) {
        this.username = username;
        this.password = password;
        this.id = id;
    }
}
