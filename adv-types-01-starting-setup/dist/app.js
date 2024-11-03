"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('max', 'rob');
result.split(' ');
const fetchedUserData = {
    id: 'ul',
    name: 'Max',
};
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map