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
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mukundaparajuli");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
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
