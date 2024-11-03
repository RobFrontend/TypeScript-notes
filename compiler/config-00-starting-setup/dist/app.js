"use strict";
// INTERFACES
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = {
    name: 'Robert',
    age: 27,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hi there- I am');
console.log(user1);
const user2 = new Person('Robertson');
console.log(user2);
const user3 = new Person;
console.log(user3);
user3.greet('Hello there');
//# sourceMappingURL=app.js.map