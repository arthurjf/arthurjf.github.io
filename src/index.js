import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Global styles
import './css/style.css';

// Main components
import App from './App';
import About from './sections/About';
import Privacy from './sections/Privacy';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import NotFound from './sections/NotFound';

// Transit Course
import TransitCourse from './sections/projects/TransitCourse/About';

// Encaixando Matemática
import EncaixandoMatematica from './sections/projects/EncaixandoMatematica/About';

// Don't Pop It
import DontPopIt from './sections/projects/DontPopIt/About';

// Desafio da Forca
import DesafioDaForca from './sections/projects/DesafioDaForca/About';
import PrivacyDesafioDaForca from './sections/projects/DesafioDaForca/Privacy';

import global_en from "./translations/en/global.json";
import global_ptbr from "./translations/pt-br/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Footer from './includes/Footer';
import Header from './includes/Header';
import ScrollToTop from './includes/ScrollToTop';

const LANG_STORAGE_KEY = 'preferredLanguage';
const userLanguage = localStorage.getItem(LANG_STORAGE_KEY) || window.navigator.language || 'en';

i18next.init({
  interpolation: { escapeValue: false },
  lng: userLanguage,
  resources: {
    en: {
      global: global_en,
    },
    'pt-BR': {
      global: global_ptbr,
    },
  },
  fallbackLng: 'en',
});

const Root = (
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/transitcourse" element={<TransitCourse />} />
          <Route path="projects/desafiodaforca" element={<DesafioDaForca />} />
          <Route path="projects/desafiodaforca/privacy" element={<PrivacyDesafioDaForca />} />
          <Route path="projects/encaixandomatematica" element={<EncaixandoMatematica />} />
          <Route path="projects/dontpopit" element={<DontPopIt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(Root);
