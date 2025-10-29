// Type safe reuseable code with different types
// we use this in functions , classes , interfaces etc.,
// generic function
function identity(arg) {
    return arg;
}
console.log(identity("Jameal"));
console.log(identity(42));
var response1 = {
    data: { id: 1, name: "John Doe" },
    status: 200
};
// we wont use in variable declarations like let a: T = value; // error T is not defined here
