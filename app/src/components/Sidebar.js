import React from "react";
import "../css/Sidebar.css";

// Images
import fileIcon from "../images/file_ico.svg";
import githubIcon from "../images/github_ico.svg";
import mailIcon from "../images/mail_ico.svg";

 
const Sidebar = () => {
  return (
    <div className="sb-root">
      <div className="sb-item active">
        <a href="#">
          <img src={fileIcon} alt="home menu" />
        </a>
      </div>
      <div className="sb-item">
        <a href="https://github.com/bekrine" target="__blank">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
   
      <div className="sb-item"  >
        <a href="mailto: mohamed.bekrine.mb@gmail.com"  >
          <img src={mailIcon} alt="LinkedIn" className="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
