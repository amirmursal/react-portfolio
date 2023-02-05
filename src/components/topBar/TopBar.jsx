import React from "react";
import "./topbar.scss";
import { LinkedIn, GitHub } from "@mui/icons-material"
const TopBar = ({open, setOpen}) => {
    return (
        <div className={`topbar ${open && `active`}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        genius.
                    </a>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <a href="https://github.com/amirmursal">Github</a>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/amir-mursal-320b1568/">Linkedin</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={setOpen}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;