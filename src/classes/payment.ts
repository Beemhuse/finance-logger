// import {} from "../"

import {HasFormatter} from '../interfaces/hasFormatters.js'
export class Payment implements HasFormatter {
    constructor(

        readonly recipient1: string,
        readonly recipient2: string,
        private details: string,
        public amount: number
    ){}
    
    format(){
        return `${this.recipient1} received $${this.amount} from ${this.recipient2} for ${this.details} `
    }
}
