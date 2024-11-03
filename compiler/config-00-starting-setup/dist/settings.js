"use strict";
const body = document.querySelector('body');
let x = 1;
function clickHandler(message) {
    x++;
    console.log('Clicked' + message, x);
}
body.addEventListener('click', () => clickHandler(' without bind'));
//# sourceMappingURL=settings.js.map