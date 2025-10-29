// Type safe reuseable code with different types
// we use this in functions , classes , interfaces etc.,

// generic function
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Jameal"));
console.log(identity<number>(42));

// generic class
// interface ApiResponse<T> {
//     data: T;
//     status: number;
//     error?: string;
// }

type ApiResponse<T> = {
    data: T;
    status: number;
    error?: string;
}

const response1: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "John Doe" },
    status: 200
};

// we wont use in variable declarations like let a: T = value; // error T is not defined here


// Final Recap:

// identity<T>: A generic function that can work with any type (string, number, boolean, etc.). The T is a type placeholder that you define when calling the function. It provides type safety and flexibility.

// identityAny: A function that can accept any type, but loses type safety because it uses any instead of a generic placeholder. It will work with any type, but TypeScript won’t enforce any type checks.

// identityString: A function that is specific to one type, in this case, string. It is not a generic, and it will only work with string values.