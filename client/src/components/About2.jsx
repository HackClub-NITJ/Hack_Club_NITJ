import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FaElementor } from 'react-icons/fa';
import { FaSearchengin } from 'react-icons/fa';

const About2 = () => {
    return (
        <section className="about2">
            <div className="container">
                <h1 id="title">Join <span>Hack Club NITJ</span> Today!</h1>
                <div className="row">
                    <div className="infocard" id='one'>
                        <BiCodeAlt size={30} />
                        <h1>1. Perfect Coding Environment</h1>
                        <p>We have a community around 400+ members who are ready to help you at any moment.</p>
                    </div>
                    <div className="infocard" id='two'>
                        <FaSearchengin size={30} />
                        <h1>2. Regular Workshops</h1>
                        <p>We conduct regular workshops on recent tech to give students a knowledge about what going on.</p>
                    </div>
                    <div className="infocard" id="three">
                        <FaElementor size={30} />
                        <h1>3. Guidance and Mentorship</h1>
                        <p>We have mentors with us who are ready to guide you always!</p>
                    </div>
                </div>
                <a href="https://forms.gle/iqLr9ZFaY3vdn68K8" target="_blank"><button>Join Us</button></a>
            </div>
        </section>
    );
}

export default About2;