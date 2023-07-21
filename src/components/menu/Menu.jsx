import React from "react";
import "./menu.scss";

const Menu =({open, setOpen})=>{
    return (
        <div className={`menu ${open && `active`}`}>
            <ul>
                <li onClick={setOpen}>
                    <a href="#intro">Home</a>
                </li>
                {/* <li onClick={setOpen}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={setOpen}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={setOpen}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}
                <li onClick={setOpen}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}

export default Menu;