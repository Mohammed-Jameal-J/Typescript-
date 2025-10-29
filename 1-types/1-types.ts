// primitive types

let userName: string = "Mohammed";
let userAge: number = 22;
let isStudent: boolean = false;
let empty: null = null;
let notDefined: undefined = undefined;

// array 

let hobbies: string[] = ["reading", "traveling", "swimming"];
let num : number[] = [1, 2, 3, 4, 5];

// tuples 
let person: [string, number] = ["Bob", 25];

// special types ( any has no type checking, unknown has type checking )

let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
// no error it works because no type checking
// randomValue.toUpperCase();  

let inputValue: unknown = "World";
inputValue = 42;
inputValue = false;

// to check its string or not 
// if (typeof inputValue === "string") {
//     inputValue.toUpperCase();  
// }


// void = it wont return anything  
function add(num1: number, num2: number): void {  
    console.log(num1 + num2);
}

function multiple(num1: number, num2: number): number {  
   return num1 * num2
}
// same like void we have never this will never return anything for long running process or error
function generateError(message: string): never {
    throw new Error(message);
}

let address = {
    street: "St nagar",
    city: "Coimbatore",
    zipCode: 640001
};

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Is Student: ${isStudent}`);
console.log(`Empty: ${empty}`);
console.log(`Not Defined: ${notDefined}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Numbers: ${num.join(", ")}`);
console.log(`Person: Name - ${person[0]}, Age - ${person[1]}`);
add(5, 10);
console.log(`Multiplication: ${multiple(5, 11)}`);
console.log(`Address: ${address.street}, ${address.city}, ${address.zipCode}`);
