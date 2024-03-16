// console.log
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is an error');
//***************************************
// variables
//***************************************
// let score = 30;
// const age = 30;
//***************************************
// data types string numbers boolean null undefined 
// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const  = null;
// const y = undefined;
// let z;
//***************************************
// concatenation
//***************************************
//console.log('My name is ' + name + 'and I am ' + age);
// console.log(`My name is ${name} and I am ${age}`);
//const s = 'Hello World!';
// const s = 'technology, computers, it, code';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toLowerCase());
// console.log(s.split(', '));
//***************************************
// Arrays - variables that hold multiple values
//***************************************
// const numbers = new Array('1,2,3,4,5');
// console.log(numbers);
//const fruits = ['apples', 'oranges', 'pears', 10, true];
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// fruits.indexOf('oranges');
// console.log(fruits);
//***************************************
// Object literals
//***************************************
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
//const {firstName, lastName, address: {city}} = person;
// person.email = 'john@gmail.com';
// console.log(person);
//***************************************
// Arrays of Objects
//***************************************
// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },
// ];
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
//***************************************
// Loops
//***************************************

// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },
// ];
// For loop
// for(let i = 0; i < 10; i++){
//     console.log(`For Loop Number: ${i}`);
// }
// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }
// While loop
// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }
// for(let todo of todos) {
//     console.log(todo.text);
// }
//***************************************
// High order array methods
//***************************************
// forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });

// console.log(todoCompleted);
//***************************************
// Conditionals
//***************************************
// const x = 20;
//
// if(x === 10){
//     console.log('x is 10');
// }else if(x > 10) {
//     console.log('x is greater than 10');
// }else {
//     console.log('x is less than 10');
// }
// const x = 4;
// const y = 10;

// if(x > 5 || y > 10){
//     console.log('x is more than 5 or y is more than 10');
// }
// if(x > 5 && y > 10){
//     console.log('x is more than 5 or y is more than 10');
// }
// Ternary operator
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// const x = 10;

// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// console.log(color);
//***************************************
// Functions at 54:26
//***************************************