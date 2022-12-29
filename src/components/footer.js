import React from 'react';
import Copyright from "../images/copyright.inline.svg";
import Ae from "../images/ae.inline.svg";
import { Link } from 'gatsby';

const footer = () => {
    return (
        <footer className='footer'>
                
            <div className='ae'>
                <Link to="/"><Ae /></Link>
            </div>            
            <div className="contact copy">
                <Copyright />
            </div>
            <div className='links-1 footer-links'>
                <ul>
                    <li><a href="mailto:austenezzell@gmail.com">Email</a></li>
                    <li><a href="https://www.are.na/austen-ezzell">Are.na</a></li>
                </ul>                    
            </div>
            <div className='links-2  footer-links'>
                <ul>
                    <li><a href="https://www.linkedin.com/in/austenezzell/">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/a.ezzy/">Instagram</a></li>
                </ul>                    
            </div>
        </footer> 
    )
}

export default footer