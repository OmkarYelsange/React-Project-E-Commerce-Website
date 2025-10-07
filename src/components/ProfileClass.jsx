import React from "react";

class ProfileClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: null,
    };
    console.log("ctr called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/OmkarYelsange");
    const json = await data.json();
    console.log(json);
    this.setState({
      userDetails: json,
    });

    this.timer = setInterval(() => {
      console.log("ST");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("CDU");
  }

  componentWillUnmount() {
    console.log("CWU");
    clearInterval(this.timer);
  }

  render() {
    console.log("Render is called");
    return this.state.userDetails === null ? (
      <h1>Loading...</h1>
    ) : (
      <div
        style={{
          margin: "20px",
          padding: "20px",
          textAlign: "center",
          justifyContent: "center",
          gap: "20px",
          border: "1px solid black ",
        }}
      >
        <h1>Class Profile</h1>
        <h3>Name : {this.state.userDetails.login}</h3>
        <h3>Address : {this.state.userDetails.bio} </h3>
        <h3>Email : {this.state.userDetails.email} </h3>
        <img src={this.state.userDetails.avatar_url} />
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default ProfileClass;
