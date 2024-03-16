import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  const { t } = useTranslation('global');
  const { i18n } = useTranslation();

  const LANG_STORAGE_KEY = 'preferredLanguage';

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  };

  return (
    <footer>
      <div className="footer">
        <div className="container p-5">
          <div className="row">
            <hr className="d-sm-none"></hr>
            <div className="col-md-3 mb-5">
              <div className="language">
                <h5>{t('footer.language.title')}</h5>
                <div className="text-link">
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
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <hr className="d-sm-none"></hr>
              <h5>{t('footer.about.title')}</h5>
              <div className="text-link">
                <NavLink to="/privacy">{t('footer.about.privacyPolicy')}</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
