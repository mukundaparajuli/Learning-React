import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-componentDidMount");
    // best place to make an api call
    // because call happens after the render
  }
  render() {
    console.log("Parent-render");
    return (
      <div>
        <h1>About Us</h1>
        <p>
          This is the Namaste Live Course on React. Today we are on the seventh
          chapter of our class and the name of the chapter is Finding the Path.
        </p>
        {/* <ProfileClassComponent name={"First Child"} /> */}
        <ProfileFunctionalComponent />
      </div>
    );
  }
}
export default About;
