// 1. Variables and Data Types
let studentName = 'Sagar';
let age = 25;
let isStudent = true;

console.log('Name:', studentName);
console.log('Age:', age);
console.log('Is Student:', isStudent);

// 2. Functions
function greet(person) {
  return 'Hello, ' + person + '!';
}
console.log(greet(name));

// 3. Arrays
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Fruits:', fruits);
fruits.push('Orange');
console.log('After push:', fruits);

// 4. Objects
let person = {
  name: 'Sagar',
  age: 25,
  isStudent: true,
};
console.log('Person Object:', person);

// 5. Loops
for (let i = 0; i < fruits.length; i++) {
  console.log('Fruit', i, ':', fruits[i]);
}

// 6. Conditional Statements
if (age > 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

// 7. DOM Manipulation
function changeText() {
  document.getElementById('demo').textContent = 'Text changed by JavaScript!';
}

// 8. Event Handling
function showAlert() {
  alert('Button clicked!');
}

// UI Demo Functions for Advanced Features
function showTemplateLiteral() {
  const language = 'JavaScript';
  const level = 'Advanced';
  document.getElementById(
    'templateLiteralResult'
  ).textContent = `Welcome to ${language} - ${level} Features!`;
}

function showDestructuring() {
  const user = { username: 'sagar', email: 'sagar@example.com' };
  const { username, email } = user;
  document.getElementById(
    'destructuringResult'
  ).textContent = `User: ${username}, Email: ${email}`;
}

function showArrayMethods() {
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map((n) => n * n);
  const evens = numbers.filter((n) => n % 2 === 0);
  document.getElementById(
    'arrayMethodsResult'
  ).textContent = `Squares: ${squares.join(', ')} | Evens: ${evens.join(', ')}`;
}

function showClassDemo() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return `${this.name} makes a noise.`;
    }
  }
  const dog = new Animal('Dog');
  document.getElementById('classDemoResult').textContent = dog.speak();
}

async function showAsyncAwait() {
  const resultElem = document.getElementById('asyncAwaitResult');
  resultElem.textContent = 'Loading...';
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/2'
    );
    const data = await response.json();
    resultElem.textContent = `Fetched: ${data.title}`;
  } catch (err) {
    resultElem.textContent = 'Error fetching data.';
  }
}

function showLocalStorage() {
  localStorage.setItem('workshop', 'JavaScript Basics & Advanced');
  document.getElementById('localStorageResult').textContent =
    localStorage.getItem('workshop');
}

function showErrorHandling() {
  try {
    throw new Error('This is a custom error!');
  } catch (e) {
    document.getElementById('errorHandlingResult').textContent =
      'Caught Error: ' + e.message;
  }
}

// --- More Interactive Frontend Features ---

// Dynamic List
function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (!value) return;
  const ul = document.getElementById('dynamicList');
  const li = document.createElement('li');
  li.textContent = value;
  li.onclick = function () {
    ul.removeChild(li);
  };
  ul.appendChild(li);
  input.value = '';
}

// Color Changer
function changeBgColor() {
  const colors = [
    '#f8b400',
    '#6a2c70',
    '#b83b5e',
    '#0bceaf',
    '#f38181',
    '#fff',
    '#222',
  ];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}

// Image Toggle
function toggleImage() {
  const img = document.getElementById('toggleImg');
  if (img.style.display === 'none') {
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
}

// Live Clock
function updateClock() {
  const clock = document.getElementById('clock');
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);
updateClock();

// Theme Switcher
let darkTheme = false;
function toggleTheme() {
  darkTheme = !darkTheme;
  document.body.style.backgroundColor = darkTheme ? '#222' : '#fff';
  document.body.style.color = darkTheme ? '#fff' : '#222';
}

// Input Validation
function validateEmail() {
  const email = document.getElementById('emailInput').value;
  const result = document.getElementById('emailValidationResult');
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(email)) {
    result.textContent = 'Valid email!';
    result.style.color = 'green';
  } else {
    result.textContent = 'Invalid email!';
    result.style.color = 'red';
  }
}

// 9. ES6 Template Literals & Destructuring
const language = 'JavaScript';
const level = 'Advanced';
console.log(`Welcome to ${language} - ${level} Features!`);
const user = { username: 'sagar', email: 'sagar@example.com' };
const { username, email } = user;
console.log(`User: ${username}, Email: ${email}`);

// 10. Arrow Functions & Array Methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n * n);
console.log('Squares:', squares);
const evens = numbers.filter((n) => n % 2 === 0);
console.log('Even Numbers:', evens);

// 11. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
const dog = new Animal('Dog');
dog.speak();

// 12. setTimeout & setInterval
setTimeout(() => {
  console.log('This message appears after 1 second');
}, 1000);
let count = 0;
const intervalId = setInterval(() => {
  count++;
  if (count <= 3) {
    console.log(`Interval count: ${count}`);
  } else {
    clearInterval(intervalId);
  }
}, 1000);

// 13. Fetch API (GET request to public API)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log('Fetched Data:', data))
  .catch((error) => console.error('Fetch Error:', error));

// 14. Async/Await
async function fetchTodo() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/2'
    );
    const data = await response.json();
    console.log('Async/Await Data:', data);
  } catch (err) {
    console.error('Async/Await Error:', err);
  }
}
fetchTodo();

// 15. localStorage
localStorage.setItem('workshop', 'JavaScript Basics & Advanced');
console.log('localStorage workshop:', localStorage.getItem('workshop'));

// 16. Error Handling
try {
  throw new Error('This is a custom error!');
} catch (e) {
  console.error('Caught Error:', e.message);
}
