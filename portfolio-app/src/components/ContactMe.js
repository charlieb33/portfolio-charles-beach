import React from "react"
import "../styles/ContactMe.css"

const ContactMe = () => {
    return (
        <div className="contact-me-container">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/charlescbeach@optonline.net" method="POST" className="contact-me-form">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your e-mail" />
                <textarea name="message" placeholder="Your Message"
                    rows="12" cols="35"></textarea>
                <input type="submit" value="Send" className="submit-button" />
            </form>
        </div>
    )
}

export default ContactMe