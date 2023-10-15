import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        This is the Namaste Live Course on React. Today we are on the seventh
        chapter of our class and the name of the chapter is Finding the Path.
      </p>
      <Outlet />
    </div>
  );
};
export default About;
