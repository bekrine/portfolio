import React from "react";
import CodeBar from "../CodeBar";
import "../../css/About.css";

const About = () => {
  return (
    <div className="ab-root">
      <CodeBar rowAmount={30} />
      <div className="ab-content">
        <h2>Mohamed Bekrine</h2>
        <h3>Software Engineer</h3>
        <p>
          I am more than a web developer. I am an engineer that is passionate
          about designing, developing, and shipping production quality
          technology. I strive to bring ideas to life, let me work with you and
          let us see what we can make! I am based out of Ouarzazate, Morroco and
          yes, it is hot here. I have been programming and designing games, apps,
          and programs since I was 16 and have a strong passion to create high
          quality applications.
        </p>
      </div>
    </div>
  );
};

export default About;
