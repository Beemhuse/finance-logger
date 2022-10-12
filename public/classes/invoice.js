// import {} from "../"
export class Invoice {
    constructor(client1, client2, details, amount) {
        this.client1 = client1;
        this.client2 = client2;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client1} payed $${this.amount} to ${this.client2} for ${this.details}`;
    }
}
