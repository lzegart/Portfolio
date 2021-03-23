import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <form class="contactContent">
            <header class="row">
                <div class="page-header">
                    <h1>Contact</h1>
                </div> 
            </header>
            <article class="row">
                <h4>Lara Zegart</h4>
            </article>
            <article class="row flex-column">
                <h6>Email: laraezegart@gmail.com</h6>
                <h6>Phone number available on request</h6>
            </article>
            <article class="row">
                <Link href="https://github.com/lzegart" class="link" id="contact-link">Github Profile</Link>
            </article>
            <article class="row">
                <Link href="https://www.linkedin.com/in/lara-zegart-682429114/" class="link" id="contact-link">Linked In Profile</Link>
            </article>
            <article class="row">
                <Link href="./Lara Zegart Resume- Coding 2020.pdf" class="link" id="contact-link">Resume</Link>
            </article>
        </form>
    )
}

export default Contact;