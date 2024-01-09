import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation("global");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className={`navbar navbar-expand-lg fixed-top ${isMenuOpen ? 'expanded' : ''}`}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/about">Arthur Fernandes</NavLink>
                    <div className="d-md-none">
                        <button
                            className="btn btn-nav"
                            type="button"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            {isMenuOpen ? (
                                <i className="bi bi-x nav-icon"></i>
                            ) : (
                                <i className="bi bi-list nav-icon"></i>
                            )}
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link first-item" activeClassName="active" exact to="/about">{t("header.aboutMe")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link middle-item" activeClassName="active" to="/skills">{t("header.skills")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link middle-item" activeClassName="active" to="/projects">{t("header.projects")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link last-item" activeClassName="active" to="/privacy">{t("header.privacyPolicy")}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-custom" href="./res/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-file-earmark-arrow-down-fill"></i> View Résumé</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
