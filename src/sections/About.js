import React from 'react';
import Header from '../includes/Header';
import '../css/style-about.css';
import '../css/style-skills.css';

function About() {
    return (
        <div>
            <Header />
            <div className="container content text-center mt-5 avatar">
                <img
                    src="https://media.licdn.com/dms/image/D4D03AQEUh-kbQznOWw/profile-displayphoto-shrink_800_800/0/1678217866546?e=1705536000&v=beta&t=kNtuvHIiA--4eSzmLlTyN8O2MWblfUoJLZkW7XN1ur4"
                    className="img-fluid mx-auto rounded-circle"
                    alt="Profile"
                />
            </div>
            <h1 className="title">Arthur José Fernandes</h1>
            <h2 className="subtitle">Unity Developer</h2>
            <div className="container d-flex justify-content-center align-items-center p-3">
                <p className="text-center">
                    <b>Hello World 👋</b>. My name is Arthur Fernandes, a game developer from Brazil. Fluent in Portuguese and with an{' '}
                    <a href="https://www.efset.org/cert/B8Ngby" target="_blank" rel="noopener noreferrer">
                        C1 Advanced
                    </a>{' '}
                    level of English proficiency, I specialize in Indie game development with 3 years of experience using the Unity game engine.
                    Additionally, I have advanced skills in C#, proficiency in modeling and texturing using Blender, and a solid understanding
                    of shader programming.
                </p>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-3 mb-3">
                            <h3 className="items-title">Skills</h3>
                            <ul className="skills">
                                <li>Unity</li>
                                <li>C# (Unity)</li>
                                <li>Blender (3D Modeling)</li>
                                <li>Git</li>
                                <li>Python</li>
                                <li>Unreal Engine</li>
                                <li>C++ (Unreal Engine)</li>
                                <li>Scrum</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 mb-3">
                            <h3 className="items-title">Contact</h3>
                            <ul className="contact">
                                <li>
                                    <a href="mailto:arthurjose.dev@gmail.com" data-bs-toggle="tooltip" data-bs-placement="top" title="arthurjose.dev@gmail.com">
                                        <i className="bi bi-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/arthur-jos%C3%A9-fernandes-048a26226/" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/arthurjf/" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/arthur_jfernandes/" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/arthur_jf" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <a className="btn btn-custom" href="./res/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-file-earmark-arrow-down-fill"></i> View Résumé
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;