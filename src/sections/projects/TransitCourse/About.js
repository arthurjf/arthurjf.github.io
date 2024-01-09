import React from 'react';
import Header from '../../../includes/Header';
import Disclaimer from '../../../includes/Disclaimer';
import '../../../css/videoplayer.css';
import '../../../css/disclaimer.css';
import '../../../css/style-skills.css';

function TransitCourse() {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="container">
                    <div className="col-12 col-md-8 offset-md-2 ">
                        <h1 className="d-flex flex-column justify-content-center align-items-center p-5">Transit Course!</h1>
                        <div className="video-container">
                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/Z8maxvV3-Ck?si=04L7yxrYo1p-xyJd&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
                            </div>
                        </div>
                        <ul className="skills m-4">
                            <li>Unity</li>
                            <li>C# (Unity)</li>
                            <li>3ds Max (3D Modeling)</li>
                            <li>Android</li>
                            <li>Google Play</li>
                        </ul>
                        <p className="m-4 text-justify"><strong>Transit Course!</strong> is an engaging casual game offering an endlessly generated map. Players embark on a journey to collect coins, a currency used to acquire an array of vehicles, each boasting unique statistics and features. <br />The gameplay involves players maneuvering their vehicles along the road by pressing and holding their finger on the screen. Releasing the touch instantly halts the vehicle's movement, adding a strategic element to the gameplay.</p>
                        <h2 className="d-flex flex-column justify-content-center align-items-center p-5 text-uppercase">My contributions</h2>
                        <ul>
                            <li>Created all 3d Models, unwrapping and texturing.</li>
                            <li>Designed and coded the game.</li>
                            <li>Created all UI 2D Graphics.</li>
                            <li>Designed over 10 level segments.</li>
                            <li>Created custom shaders for terrain color and shop background.</li>
                        </ul>
                        <div className="d-flex flex-column justify-content-center align-items-center p-5">
                            <h2 className="text-uppercase">Screenshots</h2>
                            <p className="text-justify">The following screenshots were taken during development.</p>
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="./res/img/projects/transitcourse/screenshot1.jpg" class="img-fluid" alt="Screenshot 1"></img>
                                </div>
                                <div class="col-md-6">
                                    <img src="./res/img/projects/transitcourse/screenshot2.jpg" class="img-fluid" alt="Screenshot 2"></img>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
                <Disclaimer description={"This project was removed from Google Play due to account issues."} additionalContainerTags={"col-12 col-md-8 offset-md-2"} />
            </div>
        </div>
    );
};

export default TransitCourse;
