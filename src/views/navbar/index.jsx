import React, { useRef, useState } from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CoverLetterGen V 1.0 <sub className="beta-text">Beta</sub></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/jobSubmissionDetails">Create Cover Letter</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;