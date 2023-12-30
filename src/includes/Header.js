import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';
import '../css/navbar.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/about">Arthur Fernandes</NavLink>
                    <div className="d-md-none">
                        <button className="btn btn-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link first-item" activeClassName="active" exact to="/about">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link middle-item" activeClassName="active" to="/skills">Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link middle-item" activeClassName="active" to="/projects/transitcourse">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link last-item" activeClassName="active" to="/privacy">Privacy Policy</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-custom" href="./res/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-file-earmark-arrow-down-fill"></i> View Résumé
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
