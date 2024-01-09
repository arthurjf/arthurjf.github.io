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
                        <h1 className="d-flex flex-column justify-content-center align-items-center p-5">Desafio da Forca</h1>
                        <Carousel interval={4000} className="carousel slide project-carousel mb-4">
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/desafiodaforca/1.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/desafiodaforca/2.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/desafiodaforca/3.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/desafiodaforca/4.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/desafiodaforca/5.png"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block img-fluid"
                                    src="./res/img/projects/desafiodaforca/6.png"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <ul className="skills m-4">
                            <li>Unity</li>
                            <li>C# (Unity)</li>
                            <li>AdMob</li>
                            <li>3ds Max (3D Modeling)</li>
                            <li>Android</li>
                            <li>Google Play</li>
                        </ul>
                        <p className="m-4 text-justify">The <strong>'Desafio da Forca'</strong> is a word guessing game where you must uncover the hidden word before the character is hanged. Choose themes or create custom games with personalized words and hints. Challenge your friends and have fun guessing words!</p>
                        <div className="d-flex flex-column justify-content-center align-items-center p-2">
                            <a className="btn btn-primary p-3" href="https://play.google.com/store/apps/details?id=br.com.overnightgames.desafiodaforca"><i class="bi bi-google-play"></i> Google Play</a>
                        </div>
                        <h2 className="d-flex flex-column justify-content-center align-items-center p-5 text-uppercase">My contributions</h2>
                        <ul>
                            <li>Drew all pixel art.</li>
                            <li>Designed and coded the game.</li>
                            <li>Created all UI 2D Graphics.</li>
                            <li>Added over 250 words/hints through an json file.</li>
                        </ul>
                    </div >
                    <div className="d-flex flex-column justify-content-center align-items-center p-5">
                        <h2 className="text-uppercase">Showcase Video</h2>
                    </div>
                    <div className="video-container">
                        <div className="video">
                            <iframe src="https://www.youtube.com/embed/PdLfvRuGMEU?si=anaqFsw0PNhlP1jH&autoplay=0&mute=1&loop=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DesafioDaForca;
