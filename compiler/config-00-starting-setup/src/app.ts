// INTERFACES

// type AddFn = (a:number, b: number) => number; // Tworzenie typu dla funkcji
interface Addfn {
    (a:number, b: number): number; // INTERFACE dla funkcji
}

let add: Addfn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}


interface Named {
    readonly name?: string;
    outputName?: string; // ? pokazuje ze ta wartosc jest opcjonalna
}

interface Greetable extends Named { // Extend interface'u Named z Greetable, wiec nie musimy towrzyc wartosci z Named w Greetable

    // readonly name: string; // mozemy dodac READONLY w INTERFACE ale nie mozemy dodac public etc
    // age: number;

    greet(phrase: string): void
}

class Person implements Greetable, Named {
    name?: string;
    age =30;

    constructor(n?: string){
        if(n){
            this.name = n;
        }
    }

    greet(phrase: string): void {
        if(this.name){
            console.log(phrase + ' ' + this.name)
        }
        else {
            console.log('Hi')
        }
    }
}

let user1: Person;

user1 = {
    name: 'Robert',
    age: 27,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    },
}

user1.greet('Hi there- I am');
console.log(user1);

const user2 = new Person('Robertson');
console.log(user2);

const user3 = new Person;
console.log(user3)
user3.greet('Hello there')
