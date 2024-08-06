import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CoverLetterGen v1.0</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/createCoverLetter">Create Cover Letter</a>
            </div>
        </nav>
    );
};

export default Navbar;