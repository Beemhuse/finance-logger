// import {} from "../"
export class Payment {
    constructor(recipient1, recipient2, details, amount) {
        this.recipient1 = recipient1;
        this.recipient2 = recipient2;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient1} received $${this.amount} from ${this.recipient2} for ${this.details} `;
    }
}
