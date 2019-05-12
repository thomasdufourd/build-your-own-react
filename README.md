# build-your-own-react

Work in progress

## Run the code

```
cd src
npm install
npm start
```

The dev server should now be running on http://localhost:1234

# Introduction

Generally, when we speak about React we talk about both [React](https://www.npmjs.com/package/react) and [ReactDOM](https://www.npmjs.com/package/react-dom). Prior to v0.14, all ReactDOM functionality was part of the React package. This may be a source of confusion, since older documentation won't mention the distinction between the React and ReactDOM packages.

__ReactDOM__ is the glue between React and the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). When you want to show your React application you need to use `ReactDOM.render()` from the ReactDOM package. This package include the [reconciliation algorithm](#reconciliation) and platform-specific code – also known as [renderers](#renderers).

__React__ – often refered to as React core – only includes [the level React APIs](https://reactjs.org/docs/react-api.html#react). It only includes the APIs necessary to define components – the component base class, lifecycle methods, state, props and all the concepts we know and love.

## <a name="react-elements"></a> React elements

React elements are the building blocks of React applications. React elements might be confused with concept of React components. To clarify, React elements are what you see on the screen – the return value of the `render()` method of a React component.

```jsx
const element = <p>I'm an element</p>;
```

## <a name="renderers"></a> Renderes

React was originally created for the DOM but the concept of renderers was introduced to support native platforms like React Native. A renderer is responsible of turning a tree of [React elements](#react-elements) into the underlying platform. In other words, if we want to support another platform all we need is a new renderer.

In this workshop we are going to create a renderer that renders React components to the DOM – just like ReactDOM.

## <a name="reconciliation"></a> Reconciliation

Different renderes such as ReactDOM and React Native shares a lot of logic. Rendering, custom components, state, lifecycle methods and refs should work consistently across platforms.

When you use React you can think of the `render()` method as creating a tree of React elements. If props or state is changed, the `render()` method will return a different tree. The reconciler then needs to figure out how to effectively update the UI to match the most recent tree with the minimum number of operations required.

> If you want to learn more about this, the [React documentation](https://reactjs.org/docs/reconciliation.html) contains an article that explains the choices made in React's diffing algorithm.
