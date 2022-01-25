### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  
React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps and creating reusable UI components.

- What is Babel?  
Babel is a JavaScript compiler, used to convert ES2015 code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?  
JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript.It is easy to create a template using JSX in React

- How is a Component created in React?  
 React is all about re-using code, and it is recommended to split your components into separate files. React functional components can be any JavaScript function that returns the HTML. The class-based components also have almost the same features as React function components. but before we define our class-based component, we need to import the “React. Component” or extract the Component like “{Component}” from React.

- What are some difference between state and props?  
Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.

- What does "downward data flow" refer to in React?  
Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a. function down from the parent that the child can then call with some information.

- What is a controlled component?  
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

- What is an uncontrolled component?  
A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

- What is the purpose of the `key` prop when rendering a list of components?  
Keys are necessary to improve performance of React app. Keys help React identify which items have changed. To give a unique identity to every element inside the array, a key is required.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?  
Reordering a list, or adding and removing items from a list can cause issues with the component state, when indexes are used as keys. If the key is an index, reordering an item changes it. Hence, the component state can get mixed up and may use the old key for a different component instance.

- Describe useEffect.  What use cases is it used for in React components?  
useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. useEffect use cases, like fetch API data, trigger animation on new array value.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?   
useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party. libraries.

- When would you use a ref? When wouldn't you use one?  
They are used in cases where we want to change the value of a child component, without making use of props and all. By default, you may not use the ref attribute on function components because they don’t have instance.

- What is a custom hook in React? When would you want to write one?  
Custom Hooks are a mechanism to reuse stateful logic , but every time you use a custom Hook, all state and effects inside of it are fully isolated. You can make hooks to abstract logic, handle repeated tasks and generate your own JSX.
