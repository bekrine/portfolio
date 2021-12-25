import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Skills.css";

const Skills = () => {
  return (
    <div className="sk-root">
      <CodeBar rowAmount={86} />
      <div className="sk-content">
        <p>
          {" "}
          <span className="purp">import</span> React{" "}
          <span className="purp">from</span>{" "}
          <span className="green">{`"react"`}</span>;
        </p>
        <p>
          {" "}
          <span className="purp">import</span> SoftwareEngineer{" "}
          <span className="purp">from</span>{" "}
          <span className="green">{`"mohamed-bekrine"`}</span>;
        </p>
        <div className="component" style={{ marginTop: "10%" }}>
          <p>
            <span className="purp">const</span>{" "}
            <span className="blu">Skills = </span>
            <span className="orange">()</span>
            <span className="purp">{` =>`} </span>
            <span className="orange">SoftwareEngineer.Create()</span>
            <span className="purp">{` =>`} </span>
            <span className="bracket">{` {`}</span>
          </p>
          <p style={{ paddingLeft: "3%" }}>
            <span className="purp">return</span>
            <span className="orange"> (</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> CORE SKILLS{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>JavaScript</li>
            <li>Git And Repo Management</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>C#</li>
            <li>JAVA</li>
            <li>C</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>


          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> FRONTEND TECHNOLOGIES{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>WebPack</li>
            <li>Bootstrap & Reactstrap & MaterialUI & Materialize</li>
            <li>Styled-Components</li>
            <li>Tailwind</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
         
         
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> BACKEND TECHNOLOGIES{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>NodeJS</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>MongoDB</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
         
         
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> TESTING{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>Jest</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <span className="orange"> )</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
