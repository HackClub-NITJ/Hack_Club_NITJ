import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img src="https://github.com/code08-ind/HackClub-NITJ/blob/main/nitj.png?raw=true" width="60" height="60" alt="Hack Club NITJ" /> Hack Club NITJ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/workshops">Workshops</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;