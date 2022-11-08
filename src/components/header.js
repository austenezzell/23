import React from 'react';
import { Link } from 'gatsby';
import Nav from "./nav"


const header = () => {
    return (

        <header>
            <h1 className="lg-type headline">
                The design practice<br /> of <Link to="/">Austen Ezzell</Link>.
            </h1>
            <Nav />
        </header>

    )
}

export default header