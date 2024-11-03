const body = document.querySelector('body')!;

let x = 1;
function clickHandler(message: string){
    x++;
    console.log('Clicked' + message, x);
}

body.addEventListener('click', () => clickHandler( ' without bind'))