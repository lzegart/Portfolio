import React from "react";
import Headshot from "../Assets/Photos/Headshot.jpeg";

const About = () => {

    return (
        <article className="row" id="main-content">
          <img className="col- img-thumbnail" id="headshot" 
            src={Headshot} 
            alt="Headshot"  
            width="300px" 
            height="490px"/>
          
          <div className="col-lg" id="brand-statement">
            <p>
              I hope to work as a full stack web developer in a part-time or freelance capacity with room to grow and thus continue learning. My coding skills are acquired from taking U.C. Berkeley’s full stack web development boot camp while maintaining my part-time job, demonstrating my ability to juggle competing priorities successfully and my strong work ethic. My strengths as an employee and team member are organization, communication, leadership, positivity, and perseverance. I have developed technical skills in HTML, CSS, JavaScript, Node.js, and responsive frameworks. My team and I successfully created an app that calls on APIs to provide the user with a food and destination stop which is subsequently mapped out. I am passionate about approaching challenges from different angles, collaborating with others to create purposeful, helpful, and responsive web applications, and making designs come to life. I am positioned to provide unique perspectives and methods to solving broken code and executing user friendly sites for all audiences through my background and experience in languages, community development, childcare, math, and design.
            </p>
          </div>
        </article>
    
    );
}

export default About;