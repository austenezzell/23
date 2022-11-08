import React from 'react';
import { Link } from 'gatsby';


const footer = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/info" className="xs-type info-link">Information</Link></li>
                <li><Link to="/work" className="xs-type archive-link">Archive</Link></li>
                {/* <li><Link to="/work" className="sm-type tools-link">Tools</Link></li> */}
            </ul>
        </nav>
    )
}

export default footer