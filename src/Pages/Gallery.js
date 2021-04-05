import React from "react";
import Project from "../Components/Project";
import Img1 from "../Assets/Photos/Roots.png"
import Img2 from "../Assets/Photos/Piknik-sm.png"
import Img3 from "../Assets/Photos/Employee-Directory.png"
import Img4 from "../Assets/Photos/Burger-Bar.png"
import Img5 from "../Assets/Photos/Planner-sm.png"
import Img6 from "../Assets/Photos/Password-Generator-sm.png"

const Gallery = () => {

    return (
        <div style={{padding: "5vw"}}>
            <Project 
                imageSRC={Img1} 
                name="Roots" 
                description="Roots lets the user create an account and connect on a global forum to facilitate learning and cultural exchange." 
                appLink="https://our-roots.herokuapp.com/home" 
                repo="https://github.com/lzegart/Roots"/>
            <Project 
                imageSRC={Img2} 
                name="Piknik" 
                description="Piknik uses APIs to generate food and destination locations for the user and then maps the points for the user's next adventure." 
                appLink="https://lzegart.github.io/Piknik/" 
                repo="https://github.com/lzegart/Piknik"/>
            <Project 
                imageSRC={Img3} 
                name="Employee Directory" 
                description="The Employee Directory is a database of users in which you can filter or seach by name and date of birth." 
                appLink="https://employer-directory.herokuapp.com/" 
                repo="https://github.com/lzegart/Employee-Directory"/>
            <Project 
                imageSRC={Img4} 
                name="Burger-Bar" 
                description="Burger-Bar allows you to view, create, and devour burgers that are named after comic book characters." 
                appLink="https://burger-bur.herokuapp.com/burgers" 
                repo="https://github.com/lzegart/Burger-Bar"/>    
            <Project 
                imageSRC={Img5} 
                name="Work Day Planner" 
                description="This day planner allows the user to add items hourly to keep track of their schedule. Colors indicate if the hour for said task is current or has already passed." 
                appLink="https://lzegart.github.io/Day-Planner/" 
                repo="https://github.com/lzegart/Day-Planner"/>
            <Project 
                imageSRC={Img6} 
                name="Password Generator" 
                description="The Password Generator allows the user to select a series of password criteria to develop a unique password." 
                appLink="https://lzegart.github.io/Password-Generator/" 
                repo="https://github.com/lzegart/Password-Generator"/>
        </div>
    )
}

export default Gallery;