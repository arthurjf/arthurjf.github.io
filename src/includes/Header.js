import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import '../css/navbar.css';

function Header() {
    const { t } = useTranslation("global");

    return (
        <header>
            <Navbar className="fixed-top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <NavLink className="navbar-brand" to="/about">Arthur Fernandes</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
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
                        </Nav>
                        <a className="btn btn-custom d-inline-block d-lg-none w-100 mt-3 mb-2" href="./res/CV.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-file-earmark-arrow-down-fill"></i> {t("header.button.resume.description")}</a>
                    </Navbar.Collapse>
                    {/* Botão de mostrar o currículo (visível em telas pequenas) */}
                    <a className="btn btn-custom d-none d-lg-inline-block" href="./res/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-file-earmark-arrow-down-fill"></i> {t("header.button.resume.description")}</a>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
