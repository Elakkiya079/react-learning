import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  -Logo
 *  -Menu Items
 *  -Cart
 * Body
 *  -Search
 *  -Restaurant Container
 *    -Restro Cards
 * Footer
 *  -Copyright
 *  -Address
 *  -Links
 *  -Contact
 */



///this is the basic code that we can write

//const parent = React.createElement('div', { id: 'parent' }, [
//  React.createElement('div', { id: 'child1' }, [
//    React.createElement('h1', {}, 'Hello i am h1'),
//    React.createElement('h2', {}, 'Hello i am h2'),
//  ]),
//  React.createElement('div', { id: 'child2' }, [
//    React.createElement('h1', {}, 'Hello i am h1'),
//    React.createElement('h2', {}, 'Hello i am h2'),
//  ]),
//]);

////const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(parent);

//jsx code also called as React Element
const jsxHeading = <h1 className="head">Hi from JSX</h1>;

//Functional Components

const Header = function () {
  return (
    <div>
      <h1>From called component</h1>
    </div>
  );
};

let number = 10;
const FunctionalComponent = () => (
  <div id="container">
    <Header />
    <Header></Header>
    {Header()}
    <h2>{number}</h2>
    <h2>{number + 100}</h2>
    {jsxHeading}
    <h1>From Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FunctionalComponent />);
