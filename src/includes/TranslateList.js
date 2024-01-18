import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslateList = ({ tag }) => {
    const { t } = useTranslation("global");

    return (
        <ul>
            {t(tag, { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default TranslateList;
