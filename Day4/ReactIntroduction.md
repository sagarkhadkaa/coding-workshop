# React Introduction - Day 4 Workshop

## What is React?

React is a popular JavaScript library developed by Facebook (Meta) for building user interfaces, particularly web applications. It's component-based, declarative, and focuses on creating interactive UIs efficiently.

### Key Features of React

1. **Component-Based Architecture**: Build encapsulated components that manage their own state
2. **Virtual DOM**: Efficient updates and rendering
3. **Declarative**: Describe what the UI should look like for any given state
4. **Learn Once, Write Anywhere**: Can be used for web, mobile (React Native), and desktop apps
5. **Strong Community**: Large ecosystem and community support

## Why Use React?

- **Reusable Components**: Write once, use anywhere
- **Fast Performance**: Virtual DOM ensures efficient updates
- **Developer Experience**: Great tooling and debugging capabilities
- **Industry Standard**: Used by many major companies
- **Large Ecosystem**: Extensive library and tool support

## Core Concepts

### 1. Components

Components are the building blocks of React applications. They can be defined as functions or classes.

#### Function Components (Recommended)

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

#### Class Components (Legacy)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### 2. JSX (JavaScript XML)

JSX is a syntax extension that allows you to write HTML-like code in JavaScript.

```jsx
const element = <h1>Hello, World!</h1>;

// JSX with expressions
const name = 'John';
const element = <h1>Hello, {name}!</h1>;

// JSX with attributes
const element = <img src='avatar.jpg' alt='Avatar' />;
```

#### JSX Rules:

- Must return a single parent element
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Self-closing tags must end with `/>`

### 3. Props

Props (properties) are used to pass data from parent to child components.

```jsx
// Parent component
function App() {
  return <Welcome name='Alice' age={25} />;
}

// Child component
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}
```

### 4. State

State is used to manage data that changes over time within a component.

#### Using useState Hook

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 5. Event Handling

React uses SyntheticEvents for cross-browser compatibility.

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

## React Hooks

Hooks are functions that let you use state and other React features in function components.

### Common Hooks:

#### useState

```jsx
const [state, setState] = useState(initialValue);
```

#### useEffect

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Side effect code
    document.title = 'Updated Title';

    // Cleanup function (optional)
    return () => {
      // Cleanup code
    };
  }, []); // Dependency array

  return <div>My Component</div>;
}
```

## Setting Up a React Project

### Method 1: Create React App (Recommended for beginners)

```bash
npx create-react-app my-app
cd my-app
npm start
```

### Method 2: Vite (Faster alternative)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Project Structure

```
my-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Basic Example: Todo App

```jsx
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter a todo'
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## Best Practices

### 1. Component Organization

- Keep components small and focused
- Use descriptive names
- Separate logic from presentation

### 2. State Management

- Keep state as local as possible
- Use state lifting when needed
- Consider context for deeply nested props

### 3. Performance

- Use React.memo for expensive renders
- Optimize re-renders with useCallback and useMemo
- Avoid creating objects/arrays in render

### 4. Code Style

- Use consistent naming conventions
- Destructure props and state
- Use arrow functions for event handlers

## Common Patterns

### Conditional Rendering

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>
  );
}
```

### Lists and Keys

```jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.id}>{number.value}</li>
      ))}
    </ul>
  );
}
```

### Forms

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <textarea
        name='message'
        value={formData.message}
        onChange={handleChange}
        placeholder='Message'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
```

## Next Steps

After understanding these basics, you can explore:

1. **React Router** - For navigation and routing
2. **State Management** - Redux, Zustand, or Context API
3. **Styling** - CSS Modules, Styled Components, Tailwind CSS
4. **Testing** - Jest, React Testing Library
5. **Build Tools** - Webpack, Vite, Parcel
6. **TypeScript** - For type safety
7. **Next.js** - React framework for production

## Resources

- [Official React Documentation](https://react.dev/)
- [React Tutorial](https://react.dev/learn)
- [Create React App](https://create-react-app.dev/)
- [Vite](https://vitejs.dev/)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Workshop Exercise

For today's workshop, we'll:

1. Set up a new React project
2. Create components for a portfolio website
3. Use props and state
4. Handle events and forms
5. Style components with CSS

Let's build a portfolio website that showcases your skills as a full-stack developer!
