const heading1 = React.createElement("h1", {
    className: "heading1",
}, "heading 1");

const heading2 = React.createElement("h2", {
    className: "heading2",
}, "heading 2");

const container = React.createElement("div", {
    id: "container"
}, [heading1, heading2]);
console.log(container)
const root = ReactDOM.createRoot(document.getElementById("root"));

// pasing a react element inside the root
root.render(container)