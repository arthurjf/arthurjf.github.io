import React from 'react';
import { Link } from 'react-router-dom';
import '../css/notfound.css';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation("global");

    return (
        <div>
            <div className="container content not-found">
                <h1 className="text-center title">404</h1>
                <h2 className="text-center subtitle">{t("notFound.subtitle")}</h2>
                <p className="text-center pt-4" dangerouslySetInnerHTML={{ __html: t('notFound.description') }} />
            </div>
        </div>
    );
}

export default NotFound;