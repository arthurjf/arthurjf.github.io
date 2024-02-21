import React from 'react';
import { useTranslation } from 'react-i18next';

import Disclaimer from '../../../includes/Disclaimer';
import TranslateList from '../../../includes/TranslateList';

import '../../../css/disclaimer.css';
import '../../../css/style-skills.css';
import '../../../css/videoplayer.css';

const TRANSLATION_KEYS = {
    global: "global",
    description: "project.transitCourse.description",
    disclaimer: "project.transitCourse.disclaimer.description",
    contributionsTitle: "project.transitCourse.myContributions.title",
    screenshotsTitle: "project.transitCourse.screenshots.title",
    screenshotsDescription: "project.transitCourse.screenshots.description",
    contributionsListItems: "project.transitCourse.myContributions.listItems"
};

function TransitCourse() {
    const { t } = useTranslation(TRANSLATION_KEYS.global);

    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="col-12 col-md-8 offset-md-2">
                        <h1 className="d-flex flex-column justify-content-center align-items-center p-5">Transit Course!</h1>
                        <div className="video-container">
                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/Z8maxvV3-Ck?si=04L7yxrYo1p-xyJd&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
                            </div>
                        </div>
                        <ul className="skills m-4">
                            <li><bi className="bi bi-unity"></bi> Unity</li>
                            <li>C# (Unity)</li>
                            <li>3ds Max (3D Modeling)</li>
                            <li><bi className="bi bi-android"></bi> Android</li>
                            <li><bi className="bi bi-google-play"></bi> Google Play</li>
                        </ul>
                        <p className="m-4 text-justify" dangerouslySetInnerHTML={{ __html: t(TRANSLATION_KEYS.description) }} />
                    </div>
                </div>
                <Disclaimer description={t(TRANSLATION_KEYS.disclaimer)} additionalContainerTags={"col-12 col-md-8 offset-md-2"} />
                <div className="container">
                    <div className="col-12 col-md-8 offset-md-2">
                        <h2 className="d-flex flex-column justify-content-center align-items-center p-5 text-uppercase">{t(TRANSLATION_KEYS.contributionsTitle)}</h2>
                        <TranslateList tag={TRANSLATION_KEYS.contributionsListItems} />
                        <div className="d-flex flex-column justify-content-center align-items-center p-5">
                            <h2 className="text-uppercase">{t(TRANSLATION_KEYS.screenshotsTitle)}</h2>
                            <p className="text-justify">{t(TRANSLATION_KEYS.screenshotsDescription)}</p>
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
            </div>
        </div >
    );
};

export default TransitCourse;
