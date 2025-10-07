import React from "react";
import ProfileClass from "../components/ProfileClass";
import ProfileFn from "../components/ProfileFn";

const About = () => {
  return (
    <div>
      <ProfileFn />
      <ProfileClass
        name="Omkar Yelsange"
        address="Mumbai"
        email="oy@gmail.com"
      />
    </div>
  );
};

export default About;
