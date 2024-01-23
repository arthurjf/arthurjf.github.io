import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TranslateList from '../includes/TranslateList';

function Privacy() {
    const { t } = useTranslation("global");

    const collectionRef = useRef(null);
    const useOfInfoRef = useRef(null);
    const sharingOfInfoRef = useRef(null);
    const dataSecurityRef = useRef(null);
    const cookiesAndTrackingRef = useRef(null);
    const consentAndUserRightsRef = useRef(null);
    const changesToPolicyRef = useRef(null);
    const contactUsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'auto' });
    };

    return (
        <div>
            <div className="container content h-100">
                <h1><strong>{t("privacyPolicy.title")}</strong></h1>
                <p className="text-justify">{t("privacyPolicy.description")}</p>

                <ul className="list-group-numbered border border-dark rounded pb-3 pt-4">
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(collectionRef)}>{t("privacyPolicy.collectionOfPersonalInfo.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(useOfInfoRef)}>{t("privacyPolicy.useOfPersonalInfo.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(sharingOfInfoRef)}>{t("privacyPolicy.sharingOfInfo.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(dataSecurityRef)}>{t("privacyPolicy.dataSecurity.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(cookiesAndTrackingRef)}>{t("privacyPolicy.cookiesAndTracking.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(consentAndUserRightsRef)}>{t("privacyPolicy.yourConsentAndUserRights.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(changesToPolicyRef)}>{t("privacyPolicy.changesToPolicy.title")}</p></li>
                    <li className="list-group-item mb-2"><p className="text-link d-inline" onClick={() => scrollToSection(contactUsRef)}>{t("privacyPolicy.contactUs.title")}</p></li>
                </ul>

                <section ref={collectionRef}>
                    <h2><strong>{t("privacyPolicy.collectionOfPersonalInfo.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.collectionOfPersonalInfo.description")}</p>
                </section>

                <section ref={useOfInfoRef}>
                    <h2><strong>{t("privacyPolicy.useOfPersonalInfo.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.useOfPersonalInfo.description")}</p>
                </section>

                <section ref={sharingOfInfoRef}>
                    <h2><strong>{t("privacyPolicy.sharingOfInfo.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.sharingOfInfo.description")}</p>
                    <TranslateList tag="privacyPolicy.sharingOfInfo.listItems" />
                </section>

                <section ref={dataSecurityRef}>
                    <h2><strong>{t("privacyPolicy.dataSecurity.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.dataSecurity.description")}</p>
                </section>

                <section ref={cookiesAndTrackingRef}>
                    <h2><strong>{t("privacyPolicy.cookiesAndTracking.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.cookiesAndTracking.description")}</p>
                </section>

                <section ref={consentAndUserRightsRef}>
                    <h2><strong>{t("privacyPolicy.yourConsentAndUserRights.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.yourConsentAndUserRights.description")}</p>
                </section>

                <section ref={changesToPolicyRef}>
                    <h2><strong>{t("privacyPolicy.changesToPolicy.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.changesToPolicy.description")}</p>
                </section>

                <section ref={contactUsRef}>
                    <h2><strong>{t("privacyPolicy.contactUs.title")}</strong></h2>
                    <p className="text-justify">{t("privacyPolicy.contactUs.description")}</p>
                </section>

                <section>
                    <p className="text-justify"><strong>{t("privacyPolicy.lastUpdated")}</strong> {t("privacyPolicy.date")}</p>
                    <p className="text-justify">{t("privacyPolicy.appreciationMessage")}</p>
                </section>
            </div>
        </div>
    );
}

export default Privacy;
