import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// Reconciliation ==>algorithm to find  out  the  diff betn  your trees and your actual dom and virtual dom
// diff algorithm==finds out the difference betn the tree
// React fiber==> Reconciliation engine==>Responsible for diff
// why dont we use index as a key
// what does it mean to destructure the data
