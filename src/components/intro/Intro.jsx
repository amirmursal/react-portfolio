import React from "react";
import Typewriter from 'typewriter-effect';
import "./intro.scss";

const Intro = () => {

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/amir.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Amir Mursal</h1>
                    <h3>Freelance<span><Typewriter
                        options={{
                            strings: ['React', 'JavaScript', 'Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro;