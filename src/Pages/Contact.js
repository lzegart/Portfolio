import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Contact = () => {

    return (
        <form className="contactContent">
            <header className="row">
                <div className="page-header">
                    <h1>Contact</h1>
                </div> 
            </header>
            <article className="row flex-column">
                <h4>Email: laraezegart@gmail.com</h4>
                <h4>Phone number available on request</h4>
            </article>
            <article className="row">
                <a href="https://github.com/lzegart" className="link" id="contact-link">Github Profile</a>
            </article>
            <article className="row">
                <a href="https://www.linkedin.com/in/lara-zegart-682429114/" className="link" id="contact-link">Linked-In Profile</a>
            </article>
            <article className="row">
                <Link to="/Resume" className="link" id="contact-link">Resume</Link>
            </article>
        </form>
    )
}

export default Contact;