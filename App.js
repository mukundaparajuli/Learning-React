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
// created a server for you

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    className: "heading1",
  },
  "heading 1 from parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "heading2",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));

// pasing a react element inside the root
root.render(container);
