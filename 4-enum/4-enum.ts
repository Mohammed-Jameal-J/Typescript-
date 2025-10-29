enum statusCodes {
    SUCCESS = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

const taskStatus: statusCodes = statusCodes.SUCCESS;

console.log(taskStatus);

// enum used for fixed set of constants like days, months, status codes etc.

// by default enum values are number starting from 0

// its like a job portal where we have fixed set of status codes for job applications

// name constant we are assigning number manually or string also we can assign

// enum statusCodes {
//     SUCCESS = "success",
//     NOT_FOUND = "404",
//     SERVER_ERROR = "500"
// }