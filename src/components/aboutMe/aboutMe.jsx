import React from "react";
import "./aboutMe.css"; // Import CSS file for styling
import aboutImage from "../assets/images/about1.png"; // Import image using ES6 module syntax

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={aboutImage} alt="Sam Greenwood" />
        <p>
          Hey there! I'm Sam Greenwood, a creative enthusiast on a mission to
          craft captivating experiences personally and professionally! Inspired
          by the endless possibilities of design and development, I'm fueled by
          a passion for creative expression through innovation. When I'm not
          behind the screen, you'll find me exploring New Brunswick with my
          family and our two black labs. Whether it's design, marketing, or
          development, I'm always eager to connect and collaborate to make the
          world a little more weird and wonderful with every project!🌈
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
