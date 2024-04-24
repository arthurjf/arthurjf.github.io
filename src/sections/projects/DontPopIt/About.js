import React from 'react';
import { useTranslation } from 'react-i18next';

import Disclaimer from '../../../includes/Disclaimer';
import TranslateList from '../../../includes/TranslateList';

import '../../../css/disclaimer.css';
import '../../../css/style-skills.css';
import '../../../css/videoplayer.css';

const TRANSLATION_KEYS = {
    global: "global",
    description: "project.dontPopIt.description",
    disclaimer: "project.dontPopIt.disclaimer.description",
    contributionsTitle: "project.dontPopIt.myContributions.title",
    screenshotsTitle: "project.dontPopIt.screenshots.title",
    screenshotsDescription: "project.dontPopIt.screenshots.description",
    contributionsListItems: "project.dontPopIt.myContributions.listItems"
};

function DontPopIt() {
    const { t } = useTranslation(TRANSLATION_KEYS.global);

    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="col-12 col-md-8 offset-md-2">
                        <h1 className="d-flex flex-column justify-content-center align-items-center p-5">Don't Pop It!</h1>
                        <div className="video-container">
                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/cVPJYTT8J1o?si=5W9IrdzFa27CwW_v&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
                            </div>
                        </div>
                        <ul className="skills m-4">
                            <li><bi className="bi bi-unity"></bi> Unity</li>
                            <li>C# (Unity)</li>
                            <li>Photoshop</li>
                            <li>AdMob</li>
                            <li><bi className="bi bi-android"></bi> Android</li>
                            <li><bi className="bi bi-google-play"></bi> Google Play</li>
                        </ul>
                        <p className="m-4 text-justify" dangerouslySetInnerHTML={{ __html: t(TRANSLATION_KEYS.description) }} />
                        <div className="d-flex flex-column justify-content-center align-items-center p-2">
                            <a className="btn btn-primary p-3" href="https://play.google.com/store/apps/details?id=br.com.arthurjf.DontPopIt&pcampaignid=web_share"><i class="bi bi-google-play"></i> Google Play</a>
                        </div>
                        <h2 className="d-flex flex-column justify-content-center align-items-center p-5 text-uppercase">{t(TRANSLATION_KEYS.contributionsTitle)}</h2>
                        <TranslateList tag={TRANSLATION_KEYS.contributionsListItems} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DontPopIt;
