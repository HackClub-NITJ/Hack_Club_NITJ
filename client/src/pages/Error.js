import React from 'react'
import { NavLink } from 'react-router-dom';
import error from '../images/error.png';
import '../styles/error.css';

const Error = () => {
    return (
        <>
            <section className="error">
                <div className="container">
                    <img src={error} alt="404 Error" />
                    <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
                    <p>THE PAGE YOU ARE LOOKING FOR HAVE BEEN REMOVED OR IS TEMPORARILY OUT OF SERVICE</p>
                    <NavLink to="/"><button>Back To Home Page</button></NavLink>
                </div>
            </section>
        </>
    )
}

export default Error
