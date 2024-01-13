import React from 'react';
import { useTranslation } from 'react-i18next';
import "../css/footer.css";

function Footer() {
    const { t } = useTranslation("global");
    const { i18n } = useTranslation();

    const LANG_STORAGE_KEY = 'preferredLanguage';

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem(LANG_STORAGE_KEY, lang); // Salva a linguagem no localStorage
    };

    return (
        <footer>
            <div className="footer">
                <div className="container p-5">
                    <div className="language">
                        <p>{t("footer.language.title")}</p>
                        <div className="language-buttons">
                            <button
                                className={i18n.language === 'en' ? 'active' : ''}
                                onClick={() => changeLanguage('en')}
                            >
                                English
                            </button>
                            <button
                                className={i18n.language === 'pt-BR' ? 'active' : ''}
                                onClick={() => changeLanguage('pt-BR')}
                            >
                                Português
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
