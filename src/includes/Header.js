import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/about">Arthur Fernandes</Link>
                    <div className="d-md-none">
                        <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects/transitcourse">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
