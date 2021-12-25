import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Projects.css";
import ImageSlider from "../images slider/ImageSlider"

//https://gyazo.com/9675bebd442ae2b62aaf387370560403
const Projects = () => {

  const SMARDIS_React_Native_App=()=>{
    const content=[
      {
        img:"https://i.imgur.com/QQhGK3B.png",
        title:"Login screen",
      },
      {
        img:"https://i.imgur.com/ezzpguB.png",
        title:"Register screen",
      },
      {
        img:"https://i.imgur.com/JCziXPN.png",
        title:"Admin dashboard screen",
      },
      {
        img:"https://i.imgur.com/RmQDmxE.png",
        title:"Admin drawwer screen",
      },
      {
        img:"https://i.imgur.com/3RQBIRX.png",
        title:"Admin Category page screen ",
      },
      {
        img:"https://i.imgur.com/GkXTMJ8.png",
        title:"Admin List of commands screen ",
      },
      {
        img:"https://i.imgur.com/Ue2EJ57.png",
        title:"Admin List of validated commands screen",
      },
      {
        img:"https://i.imgur.com/naTeFZU.png",
        title:"Admin Client profile screen ",
      },

      //dstrubutors screens 
      {
        img:"https://i.imgur.com/c9PQHGp.png",
        title:"Distrubutor todays missions screen",
      },
      {
        img:"https://i.imgur.com/JzpB4cC.png",
        title:"Distrubutor products panel ",
      },
      {
        img:"https://i.imgur.com/QEiITs6.png",
        title:"Distrubutor products panel swipeAbale haf way through",
      },
      {
        img:"https://i.imgur.com/UXDa57C.png",
        title:"Distrubutor products panel swipeAbale full ",
      },
      {
        img:"https://i.imgur.com/bpRowFJ.png",
        title:"Distrubutor products panel cancel client order",
      },
      {
        img:"https://i.imgur.com/3v7GLqk.png",
        title:"Distrubutor cart screen",
      },
    ]

   return  <div className="project">
      <h2>SMARDS react native app</h2>
      <div className="image-container">
        <ImageSlider content={content} />
    
      </div>
      <h3>Overview</h3>
      <hr />
      <p>
         a collaboration with my friend Said Fatah . this is a dilivery/sales tracking , Stock managers can  create schedules for dilivery missions in advance , 
         each delivery mission is assigned to a certain distrubutor
         and the later have their own panel in the application they get notifications when thier is
         a new mission for them   the app is not in the google play store nor is it appstore ,
          its used internly within the company
         .
      </p>
   
      <h3>Technologies</h3>
      <hr />
      <p>  React, React Native, Firebase, Rematch (Redux abstraction layer)</p>
    </div>
  }
  

  const Merch_Shop=()=>{
     return <div className="project">
     <h2>Merch Shop</h2>
     <div className="image-container">
       <img
         src={"https://i.imgur.com/rXWXs1N.png"}
         alt="afyaMafyaScreenShoot"
       />
     </div>
     <h3>Overview</h3>
     <hr />
     <p>
       Afya mafiya is a full stack merch store  app .
       it has a well oiled mobile design,it also has an integrated Stripe payments system
       as well as order history.
     </p>

     <h3>Technologies</h3>
     <hr />
     <p>  React, Redux  ,JWT, Mongodb, Express, Node, Styled Components,antd, CSS, Stripe</p>
     <div className="links">
       <a
         href="https://github.com/bekrine/My-Merch-Shop/upload"
         target="__blank"
       >
         GitHub
       </a>
       <a href="https://react-merch-shop.herokuapp.com" target="__blank">
         Live Demo
       </a>
     </div>
   </div>
  }
  const Tweeter=()=>{
     return  <div className="project">
     <h2>Tweeter</h2>
     <div className="image-container">
       <img
         src="https://i.imgur.com/tXkNw0Y.png"
         alt="Tweeter"
       />
     </div>
     <h3>Overview</h3>
     <hr />
     <p>
       Tweeter is a clone of the popular app Twitter. I tried to make it a
       clone as well as my own. I added a statistic feature as well as
       posts, retweets, profiles and more.
     </p>

     <h3>Technologies</h3>
     <hr />
     <p>React, Styled Components, Node, MongoDB, ANTD, Cloudinary</p>
     <div className="links">
       <a
         href="https://github.com/bekrine/tweeter"
         target="__blank"
       >
         GitHub
       </a>
       <a href="https://tweeeeter.netlify.app" target="__blank">
         Live Demo
       </a>
     </div>
   </div>
  }
  
  
  return (
    <div className="pj-root">
      <CodeBar rowAmount={126} />
      <div className="pg-content">
        <h1>Professional Work</h1>
        <SMARDIS_React_Native_App />
        
        <h1>Projects</h1>
        <Tweeter />
        <Merch_Shop />
      </div>
    </div>
  );
};

export default Projects;
