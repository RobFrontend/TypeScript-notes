function add(n1:number, n2:number) {
    return n1 + n2
}

// VOID mozemy zrobic funkcje ktora dziala bez RETURN
function prinResult(num:number): void{
    console.log('Result: '+num)
    
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

prinResult(add(12,5));

// doprecyzowanie, że zmienna ma być funkcją z dwoma parametrami o typie number
let combineValues: (a: number, b: number)=> number;

combineValues = add;
// combineValues = prinResult;

console.log(combineValues(8,8))
console.log(prinResult(combineValues(4,6)))


addAndHandle(10,20, (result)=> {
    console.log(result)
})