// // GENERICS
// const names: Array<string> = [];
// // names[0].split(' ');

// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('This is done!');
// //     }, 2000);
// // })

// // Creating Generic Function

function merge<T extends object, U extends object>(objA: T, objB: U){ // CONSTRAINS 'T extends Object'
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Rob', hobbies: ['BBall']}, {age: 30})
console.log(mergeObj.age)
console.log(mergeObj.name)
console.log(mergeObj)

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let desciptionText = 'Got no value.';
    if(element.length >0) {
        desciptionText = 'Got ' + element.length + ' elements';
    }
    return [element, desciptionText]
}

console.log(countAndDescribe('Hi there!'))

// KEYOF

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}
extractAndConvert({name: 'Roburich'}, 'name')

// GENERIC CLASSES