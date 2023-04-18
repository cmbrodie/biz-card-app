import React from "react";

import twitter from '../images/twitter_icon.png'
import facebook from '../images/facebook_icon.png'
import instagram from '../images/instagram_icon.png'
import github from '../images/github_icon.png'


export default function Footer() {
    return (
        <footer>
            <div className="icon">
                <a href="https://twitter.com">
                    <img src={twitter} alt="twitter icon" />
                </a>
            </div>
            <div className="icon">
                <a href="https://facebook.com">
                    <img src={facebook} alt="facebook icon" />
                </a>
            </div>
            <div className="icon">
                <a href="https://instagram.com">
                    <img src={instagram} alt="instagram icon" />
                </a>
            </div>
            <div className="icon">
                <a href="https://github.com">
                    <img src={github} alt="github icon" />
                </a>
            </div>
        </footer>

    )
}