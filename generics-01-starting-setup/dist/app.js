"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Rob', hobbies: ['BBall'] }, { age: 30 });
console.log(mergeObj.age);
console.log(mergeObj.name);
console.log(mergeObj);
function countAndDescribe(element) {
    let desciptionText = 'Got no value.';
    if (element.length > 0) {
        desciptionText = 'Got ' + element.length + ' elements';
    }
    return [element, desciptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Roburich' }, 'name');
//# sourceMappingURL=app.js.map