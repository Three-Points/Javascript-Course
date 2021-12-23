// Ejercicio 1

const aboutme = require('./aboutme.js')

console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

for (count = 1; count <= 100; count++) {
  if (!(count % 7)) console.log(count)
}

// Ejercicio 5

// Ejercicio 6

let formatter = {
  prefix: 'Hello',
  append: function (str = '') {
    console.log(`${this.prefix} ${str}`);
  },
};

formatter.append('World');

Object.defineProperty(formatter, 'toLowerString', {
  value: function (str = '') {
    console.log(str.toLowerCase());
  },
});

Object.keys(formatter);

formatter.toLowerString('I’m Lucas');
