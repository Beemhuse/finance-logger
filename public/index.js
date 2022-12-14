import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from './classes/listTemplate.js';
const form = document.querySelector('.new-form');
const type = document.querySelector('#type');
const to = document.querySelector('#to');
const from = document.querySelector('#from');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template
const items = document.querySelector('ul');
const list = new ListTemplate(items);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [from.value, to.value, details.value, amount.valueAsNumber];
    console.log(amount.valueAsNumber);
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    // console.log(doc)
});
