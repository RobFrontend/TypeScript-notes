// DECORATORS

// function Logger(constructor: Function){ // *1 Sposób 1- musimy podać jakis target Decoratora, tutaj jest to Constructor
//     console.log('Logging...');
//     console.log(constructor);
// }

// DECORATORS
function Logger(loginCall: string){ // *2 sposób 2- zwracamy constructor kalp funkcje decoratora, a decorator moze miec swoj parametr
    return function(constructor: Function){
        console.log(loginCall);
        console.log(constructor);
    }
}

//
function WithTemplate(template: string, hookId: string){ // *3
    return function(_: Function){
        const hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template
        }

    }
}

// @Logger // *1 DECORATOR
@Logger('Logging in...') // *2 DECORATOR - zapisujemy jako funkcje z uzyciem parametru
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person project...')
    }
}
const pers = new Person;
console.log(pers)

// PROPERTY DECORATORS
function Log(target: any, propertName: string | Symbol){
    console.log('Property decorator!');
    console.log(target, propertName);
}

// Accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Parameter decorator
function Log4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;

    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax)
    }
}