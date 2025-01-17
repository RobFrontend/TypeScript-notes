// INTERSECTION TYPES
 type Admin = {
    name: string;
    privileges: string[]
 };

 type Employee = {
    name: string;
    startDate: Date;
 }

 type ElevatedEmployee = Admin & Employee;

 const e1: ElevatedEmployee ={
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
 }
 console.log(e1)

 type Combinable = string | number;
 type Numeric = number | boolean;
 type Universal = Combinable | Numeric;

//  function add(a: Combinable, b: Combinable) {
//     if(typeof a === 'string' || typeof b === 'string') { // TYPE GUARD
//         return a.toString() + b.toString();
//     }
//     return a + b;
//  }

//  type UknownEmployee = Employee | Admin;

//  function printEmployeeInformation(emp: UknownEmployee){
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp) { // TYPE GUARD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate)
//     }
//  }
// printEmployeeInformation({name:'Robur', startDate: new Date()})

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive(){
//         console.log('Driving a truck...')
//     }

//     loadCargo(amount:number){
//         console.log('Loading cargo ...' + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     // if(vehicle instanceof Truck){ // TYPE GUARD inny rodzaj, dziala w JS nawet
//     //     vehicle.loadCargo(1000)
//     // }
//     if('loadCargo' in vehicle){ // TYPE GUARD
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1)

// // DISCRIMINATED UNION - special type guard

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break
//     }
//     console.log('Moving at speed: ' + speed)
// }

// moveAnimal({type: 'horse', runningSpeed: 20})

// // TYPE CASTING
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input'); // VERSION 1
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// userInputElement.value = 'Hi there!';

// // INDES PROPERTIES
// interface ErrorContainer {
//     // {email: 'Not a valid e-mail!', user: 'Must start with a capital character!' }
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// }

// // FUNCTION OVERLOADS
function add(a: number, b: number): number; // FUNCTION OVERLOAD
function add(a: string, b: string): string; // *1 FUNCTION OVERLOAD
function add(a: string, b: number): string; // FUNCTION OVERLOAD
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') { // TYPE GUARD
        return a.toString() + b.toString();
    }
    return a + b;
 }

 const result = add('max', 'rob'); 
 result.split(' '); // *1 teraz TS rozumie ze to moze byc tylko string i pozwoli zrobic arrayke

 // OPTIONAL CHAINING
 const fetchedUserData = {
    id: 'ul',
    name: 'Max',
    // job: { title: 'CEO', description: 'My own company'}
 };
//  console.log(fetchedUserData?.job?.title);

// NULISH COEALESCING
const userInput = null;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData)