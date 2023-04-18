import React from "react";
import laura_image from '../images/laura_smith.png'
import email_icon from '../images/mail_icon.png'
import linkedIn from '../images/linkedin.png'

export default function Info() {
    return (

        <header className="info">
            <img src={laura_image} alt="laura" />
            <h1>Laura Smith</h1>
            <h4 >Frontend Developer</h4>
            <p>laurasmith.website</p>
            <div className="contact-buttons">
                <a href="mailto:laurasmith@gmail.com">
                    <div className="mail button">
                        <img src={email_icon} />
                        <p>Email</p>
                    </div>
                </a>
                <a href="https://linkedin.com">
                    <div className="linkedIn button">
                        <img src={linkedIn} />
                        <p>LinkedIn</p>
                    </div>

                </a>

            </div>
        </header>
    )
}