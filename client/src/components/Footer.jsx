import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>Hack Club NITJ</h2>
                        <a href="/workshops">
                            <p>Workshops</p>
                        </a>
                        <NavLink to="/codeofconduct">
                            <p>Code Of Conduct</p>
                        </NavLink>
                        <a href="/projects">
                            <p>Projects</p>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h2>Hack Club</h2>
                        <a href="https://hackclub.com/" target="_blank">
                            <p>Website</p>
                        </a>
                        <a href="https://hackclub.com/press/" target="_blank">
                            <p>Press</p>
                        </a>
                        <a href="https://apacdirectory.hackclub.com/club/nitj" target="_blank">
                            <p>Hack Club NITJ Page</p>
                        </a>
                    </div>
                    <div className="col-md-3 links">
                        <h2>Connect With Us!</h2>
                        <div className="row social">
                            <a href="https://github.com/HackClub-NITJ" target="_blank">
                                <FaGithub id="github" size={45} style={{ margin: '6px', border: "1px solid rgb(236, 236, 236)", borderRadius: "25px", padding: "5px" }} />
                            </a>
                            <a href="https://www.instagram.com/hackclub_nitj/" target="_blank">
                                <FaInstagram id="instagram" size={45} style={{ margin: '6px', border: "1px solid rgb(236, 236, 236)", borderRadius: "25px", padding: "5px" }} />
                            </a>
                            <a href="https://twitter.com/hackClubNitj" target="_blank">
                                <FaTwitter id="twitter" size={45} style={{ margin: '6px', border: "1px solid rgb(236, 236, 236)", borderRadius: "25px", padding: "5px" }} />
                            </a>
                            <a href="https://t.me/+sjzcqb2dvls3NWJl" target="_blank">
                                <FaTelegramPlane id="telegram" size={45} style={{ margin: '6px', border: "1px solid rgb(236, 236, 236)", borderRadius: "25px", padding: "5px" }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2>Talk To Us!</h2>
                        <a href="mailto:hackclubnitj@gmail.com" target="_blank">
                            <p id="email">
                                hackclubnitj@gmail.com
                            </p>
                        </a>
                    </div>
                </div>
                <p id="copy">&copy; Hack Club NITJ 2022</p>
            </div>
        </section >
    );
}

export default Footer;