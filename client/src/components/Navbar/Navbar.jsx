import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar row">
            <div className="col-md-2 nav_brand">
                <NavLink to="/" exact>
                    <img
                        className="md_logo"
                        src={process.env.PUBLIC_URL + "/images/icon192.png"}
                        alt="ajh_logo"
                    />
                </NavLink>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-6">
                <NavLink className="nav_selects" to="#">
                    Learn More
                </NavLink>
                <NavLink className="nav_selects" to="#">
                    Get Started
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar;