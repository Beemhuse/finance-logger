// import {} from "../"

import {HasFormatter} from '../interfaces/hasFormatters.js'
export class Invoice implements HasFormatter {
    constructor(

        readonly client1: string,
        readonly client2: string,
        private details: string,
        public amount: number,
    ){}
    
    format(){
        return `${this.client1} payed $${this.amount} to ${this.client2} for ${this.details}`
    }
}
