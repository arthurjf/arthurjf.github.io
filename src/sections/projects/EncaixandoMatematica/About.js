import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../../css/videoplayer.css';
import '../../../css/style-skills.css';
import '../../../css/project-carousel.css';

function DesafioDaForca() {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="col-12 col-md-8 offset-md-2 ">
                        <h1 className="d-flex flex-column justify-content-center align-items-center p-5">Encaixando Matemática</h1>
                        <Carousel interval={4000} className="carousel slide project-carousel mb-4">
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/encaixandomatematica/screenshot1.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/encaixandomatematica/screenshot3.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/encaixandomatematica/screenshot6.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/encaixandomatematica/screenshot9.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/encaixandomatematica/screenshotconcluido.png"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <ul className="skills m-4">
                            <li><bi className="bi bi-unity"></bi> Unity</li>
                            <li>C# (Unity)</li>
                            <li>Substance Designer</li>
                            <li><bi className="bi bi-android"></bi> Android</li>
                            <li><bi className="bi bi-google-play"></bi> Google Play</li>
                            <li>Instituto Federal de Goiás</li>
                        </ul>
                        <p className="m-4 text-justify"><strong>"Encaixando Matemática"</strong> is an interactive game designed to elevate mathematical skills through engaging puzzles. Players solve challenges by maneuvering and fitting various mathematical pieces together. Each level offers unique puzzles that progressively enhance numerical abilities while ensuring an enjoyable learning experience. Dive into a world where learning math is an exciting quest filled with intriguing challenges and skill-building opportunities!</p>
                        <div className="d-flex flex-column justify-content-center align-items-center p-2">
                            <a className="btn btn-primary p-3" href="https://play.google.com/store/apps/details?id=io.github.arthurjf.encaixandomatematica"><i class="bi bi-google-play"></i> Google Play</a>
                        </div>
                        <h2 className="d-flex flex-column justify-content-center align-items-center p-5 text-uppercase">My contributions</h2>
                        <ul>
                            <li>Designed, developed and published</li>
                            <li>Created all 2D art.</li>
                            <li>Created all UI 2D Graphics.</li>
                            <li>Created 10 levels.</li>
                        </ul>
                        <h2 className="d-flex flex-column justify-content-center align-items-center p-5 text-uppercase">Bachelor's Thesis</h2>
                        <p className="text-justify"> This project was developed as part of a graduation thesis titled "Aprendizagem de Matemática Utilizando Jogo Digital," which translates to "Learning Math Through Digital Game". at Instituto Federal de Goiás in the Analysis and Systems Development course.</p>
                    </div >
                </div>
            </div>
        </div >
    );
};

export default DesafioDaForca;
