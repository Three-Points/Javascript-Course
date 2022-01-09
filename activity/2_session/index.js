// Ejercicio 1
const person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
};

const getKeys = (obj) => Object.keys(obj);

console.log(getKeys(person));

// Ejercicio 2
//* Global object: {}
console.log(this);

//* Function scope from server side
//* Window object from client side
function myFunction() {
    console.log(this);
}
//? undefined
console.log(myFunction());

//* Object scope
const response = {
    message: 'Hello World',
    prompt() {
        console.log(this);
    }
}
//? { message: 'Hello World', prompt: [Function: prompt] }
response.prompt();

//* Function scope from server side
const statusCode = {
    code: 200,
    prompt: () => {
        console.log(this);
    }
}
//? {}
statusCode.prompt();

// Ejercicio 3
const reverseMessage = (message) => {
    return message.split("").reverse().join("");
};

console.log(reverseMessage("Hola mundo"));

// Ejercicio 4
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        console.log(this.#validation() ? "User logged in" : "User or passwd incorrect");
    }
    #validation = () => this.username === "admin" && this.password === "passwd";
}

const login_success = new Login("admin", "passwd")
const login_fail = new Login("pepe", "bad")

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
