import React from 'react';
import { useTranslation } from 'react-i18next';
import TranslateList from '../includes/TranslateList';

function Privacy() {
    const { t } = useTranslation("global");

    return (
        <div>
            <div className="container content h-100">
                <h1><strong>{t("privacyPolicy.title")}</strong></h1>
                <p>{t("privacyPolicy.description")}</p>

                <h2><strong>{t("privacyPolicy.collectionOfPersonalInfo.title")}</strong></h2>
                <p>{t("privacyPolicy.collectionOfPersonalInfo.description")}</p>

                <h2><strong>{t("privacyPolicy.useOfPersonalInfo.title")}</strong></h2>
                <p>{t("privacyPolicy.useOfPersonalInfo.description")}</p>

                <h2><strong>{t("privacyPolicy.sharingOfInfo.title")}</strong></h2>
                <p>{t("privacyPolicy.sharingOfInfo.description")}</p>
                <TranslateList tag="privacyPolicy.sharingOfInfo.listItems" />

                <h2><strong>{t("privacyPolicy.dataSecurity.title")}</strong></h2>
                <p>{t("privacyPolicy.dataSecurity.description")}</p>

                <h2><strong>{t("privacyPolicy.cookiesAndTracking.title")}</strong></h2>
                <p>{t("privacyPolicy.cookiesAndTracking.description")}</p>

                <h2><strong>{t("privacyPolicy.yourConsentAndUserRights.title")}</strong></h2>
                <p>{t("privacyPolicy.yourConsentAndUserRights.description")}</p>

                <h2><strong>{t("privacyPolicy.changesToPolicy.title")}</strong></h2>
                <p>{t("privacyPolicy.changesToPolicy.description")}</p>

                <h2><strong>{t("privacyPolicy.contactUs.title")}</strong></h2>
                <p>{t("privacyPolicy.contactUs.description")}</p>

                <p><strong>{t("privacyPolicy.lastUpdated")}</strong> {t("privacyPolicy.date")}</p>

                <p>{t("privacyPolicy.appreciationMessage")}</p>
            </div>
        </div>
    );
};

export default Privacy;
