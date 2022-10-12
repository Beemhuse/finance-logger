import {Invoice} from "./classes/invoice.js";
import {Payment} from "./classes/payment.js";
import {HasFormatter} from './interfaces/hasFormatters.js';
import {ListTemplate} from './classes/listTemplate.js';



const form = document.querySelector('.new-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template

const items = document.querySelector('ul')!;
// const list = new ListTemplate(ul);
const list = new ListTemplate(items)

form.addEventListener('submit', (e: Event)=>{
e.preventDefault()
let values: [string, string, number]
values = [    toFrom.value, details.value, amount.valueAsNumber]

console.log(amount.valueAsNumber)
let doc: HasFormatter;
if(type.value==='invoice'){
doc = new Invoice(...values)
}
else{
doc = new Payment(...values)
}
list.render(doc, type.value, 'end');
// console.log(doc)
})