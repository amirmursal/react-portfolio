import React from "react";
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <h3>Let's talk on 9881151316 or</h3>
                <address>share your thoughts on <a href="mailto:amirmursal@gmail.com">amirmursal@gmail.com</a></address>
            </div>
        </div>
    )
}

export default Contact;