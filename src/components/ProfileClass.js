import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
        avatar_URL: "",
      },
    };
    console.log("Child-constructor " + this.props.name);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("componentDidMount");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevProps) {
      // anythigng that need to be done
    }
    console.log("Component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount");
  }
  render() {
    console.log("Child-render " + this.props.name);
    const { name, location, avatar_URL } = this?.state?.userInfo;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <img src={avatar_URL} />
      </div>
    );
  }
}

export default Profile;
