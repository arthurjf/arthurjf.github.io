import React from 'react';
import '../css/disclaimer.css';
import { useTranslation } from 'react-i18next';

function Disclaimer({ description, additionalContainerTags }) {
    const { t } = useTranslation("global");

    return (
        <div className="disclaimer">
            <div className="container">
                <div className={additionalContainerTags}>
                    <h3 className="title">{t("disclaimer.title")}</h3>
                    <p className="text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Disclaimer;
