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
                <Link href="https://github.com/lzegart" class="link" id="contact-link">Github Profile</Link>
            </article>
            <article className="row">
                <Link href="https://www.linkedin.com/in/lara-zegart-682429114/" class="link" id="contact-link">Linked-In Profile</Link>
            </article>
            <article className="row">
                <Link href="./Lara Zegart Resume- Coding 2020.pdf" class="link" id="contact-link">Resume</Link>
            </article>
        </form>
    )
}

export default Contact;