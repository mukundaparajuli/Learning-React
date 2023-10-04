// HMR ->Hot Module Replacement
// FWA->File Watcher Algorithm
// written in C++
// pracel cache

// parcel
// minifies the code
// cleans the code
// Dev and production build
//  super fast build algorithms
// Image Optimization
// Cashing by Development
// Compresses the files as well
// Compatible with older version of browsers
// HTTPS on dev machine
// parcel manages the port number as well
// we should put parcel.cache in our gitignore-->because anything  which wwe can generate in  browser we should keep that in gitignore
// parcel uses consistent  hashing algorithm
// Zero config
// Transitive Dependency
// creates a server for you
// Tree shaking -->removing unwanted code/exports

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = //react element
  (
    <h1 id="heading1" key="h1">
      First Heading
    </h1>
  );

const Heading2 = () => {
  return (
    <h1 id="heading1" key="h1">
      First Heading
    </h1>
  );
}; //react element

// Name of the functional Component name in capital letter
// is it mandatory? No
// it is just a normal convention
// functional component is a normal function returning some piece of jsx


// component composition
const HeaderComponent = () => {
  return (
    <div>
      {heading1}
      <Heading2 />
      {Heading2()}
      <h1>Namaste React Functional Component</h1>
      <h2>Namaste React functional Component</h2>
    </div>
  );
};

// JSX==> React.createElement==> object ==>HTMLDOM

const root = ReactDOM.createRoot(document.getElementById("root"));

// React.createElement ==>givves us an object==>HTML DOM
// object is the one that is converted into html and puts it upon dom
// pasing a react element inside the root

// async defer
root.render(heading1);

// Components in react
// 1=Functional based Component--new way of writing code
// 2=Class based components--old way of writing code

// Rendering a fucntional component
root.render(<HeaderComponent />);
