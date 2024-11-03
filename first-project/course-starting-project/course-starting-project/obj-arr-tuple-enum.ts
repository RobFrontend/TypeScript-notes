//  // można sprecyzować, że mamy key, które mają dany TYP, jednak musimy wtedy wypisać wszystkie keye z obiektu, inaczej pokaże błąd
// const person: {
//     name: string; 
//     age:number;
// } = {
//     name: "Maximilian",
//     age: 30
// };

// TUPLE
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number,string]; // TUPLE
// } = {
//     name: "Maximilian",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// person.role.push('admin'); // push jest wyjątkiem dla TS, który nie zostanie zauwazony jako błąd
// // person.role[1] = 10; // TS wie, ze nie moze zmienic w TUPLU stringa na number


// ENUM
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// enum Role {ADMIN, READ_ONLY, AUTHOR}; // powyzsze 3 zmienne zapisane w ENUM
enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};


let favouriteActivities: string[];
favouriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase())
    // console.log(hobby.map()) // pokaze error, bo TS wie, ze to string, a nie array
}