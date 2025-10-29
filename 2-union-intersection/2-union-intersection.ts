// union - | intersection - & 

// Union type allows a variable to hold values of multiple types

let value : string | number= "Hello";

console.log("Initial value:", value);

value = 42;
console.log("Updated value:", value);


// Intersection type combines multiple types into one
// let wholeValue: { name: string , age: number } ={ both are same 
let wholeValue: { name: string } & { age: number } ={
    name: "Alice",
    age: 30
};

console.log("Whole Value:", wholeValue);