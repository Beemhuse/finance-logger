// import {} from "../"

import {HasFormatter} from '../interfaces/hasFormatters.js'
export class Payment implements HasFormatter {
    constructor(

        readonly recipient: string,
        private details: string,
        public amount: number
    ){}
    
    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details} `
    }
}
