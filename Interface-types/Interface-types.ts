// Interface => has extend keyword to inherit the properties from another interface. mostly used in angular 
// Type 
// major we use it in typescript to define the structure of an object or a contract that a class or an object must adhere to.
// interface has more flexibility as compared to type alias.


interface Person {
    name: string;
    age: number;
}

type data = {     // for data need =  
    name: string;
    age: number;
}
const person1: Person = {
    name: "John",
    age: 30
};
const person2: data = {
    name: "Jane",
    age: 25
};

// optional 

// interface Person {
//     name: string;
//     age?: number;
// }
// type User = {     
//     name: string;
//     age?: number;
// }
// const user1: User = {
//     name: "John"
// };
// const user2: User = {
//     name: "Jane" 
// };

// readonly

interface ms {
    readonly name: string;
    age: number;
}

type xl = {  
    readonly name: string;
    age: number;
}
const person3: ms = {
    name: "John",
    age: 30
};
const person4: xl = {
    name: "Jane",
    age: 25
};
person3.age = 31; // valid
// person3.name = "Mike"; // error: cannot assign to 'name' because it is a read-only property
person4.age = 26; // valid
// person4.name = "Doe"; // error: cannot assign to 'name' because it is a read-only property



// why use interface over type
// interface can be extended using the extends keyword, allowing for better code reusability and organization.
// interfaces can be merged, meaning if you declare the same interface multiple times, TypeScript will combine them into a single interface. This is not possible with type aliases.
interface Employee {
    id: number;
}
interface Teammate extends Employee {   // interface can extend another interface
    name: string;
}

const ofc: Teammate = {
    id: 1,
    name: "Alice"
};

type sports = {
    id: number;
};
type game = sports & {   // type cant extend another type we use & for intersection
    name: string;
};
const play: game = {
    id: 2,
    name: "Football"
};
