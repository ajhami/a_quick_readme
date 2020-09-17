import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
        <div>
            {/* <hr className="footer_hr" /> */}
            <section className="row footer_row">
                <div className="social_media_buttons">
                    <NavLink to="/facebook"
                        onClick={(event) => {
                            event.preventDefault();
                            window.open("https://www.facebook.com/alex.hamilton.1044");
                        }}
                    >
                        <i className="fa fa_footer fa-facebook" />
                    </NavLink>
                    <NavLink to="/instagram"
                        onClick={(event) => {
                            event.preventDefault();
                            window.open("https://www.instagram.com/alxhami/");
                        }}
                    >
                        <i className="fa fa_footer fa-instagram" />
                    </NavLink>
                    <NavLink to="/github"
                        onClick={(event) => {
                            event.preventDefault();
                            window.open("https://github.com/ajhami");
                        }}
                    >
                        <i className="fa fa_footer fa-github" />
                    </NavLink>
                    <NavLink to="/linkedin"
                        onClick={(event) => {
                            event.preventDefault();
                            window.open("https://www.linkedin.com/in/alexjhamilton/");
                        }}
                    >
                        <i className="fa fa_footer fa-linkedin" />
                    </NavLink>
                </div>
            </section>
        </div>
    )
}

export default Footer;