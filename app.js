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
// / FUNCTIONS
// function addNums(num1, num2){
//     console.log(num1 + num2);
// }
// addNums(5, 4);
// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2;
//     //console.log(num1 + num2);
// }
// console.log(addNums());
// function greet(greeting = 'Hello', name) {
//   if(!name) {
//     // console.log(greeting);
//     return greeting;
//   } else {
//     // console.log(`${greeting} ${name}`);
//     return `${greeting} ${name}`;
//   }
// }
// // ARROW FUNCTIONS
// const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
// console.log(greet('Hi'));
// const addNums(num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));

// // OOP

// // Constructor Function
// function Person(firstName, lastName, dob) {
//   // Set object properties
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob); // Set to actual date object using Date constructor
//   // this.getBirthYear = function(){
//   //   return this.dob.getFullYear();
//   // }
//   // this.getFullName = function() {
//   //   return `${this.firstName} ${this.lastName}`
//   // }
// }

// // Get Birth Year
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// }

// // Get Full Name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }


// // Instantiate an object from the class
// const person1 = new Person('John', 'Doe', '7-8-80');
// const person2 = new Person('Steve', 'Smith', '8-2-90');

// console.log(person2);

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());



// // Built in constructors
// const name = new String('Kevin');
// console.log(typeof name); // Shows 'Object'
// const num = new Number(5);
// console.log(typeof num); // Shows 'Object'


// // ES6 CLASSES
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   // Get Birth Year
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   // Get Full Name
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person1 = new Person('John', 'Doe', '7-8-80');
// console.log(person1.getBirthYear());


// // ELEMENT SELECTORS

// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';


// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


// // USER FORM SCRIPT

// // Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }