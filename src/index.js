import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import App from './App';
import About from './sections/About';
import Privacy from './sections/Privacy';
import Skills from './sections/Skills';
import TransitCourse from './sections/projects/TransitCourse/TransitCourse';
import NotFound from './sections/NotFound';
import Projects from './sections/Projects';
import PrivacyDesafioDaForca from './sections/projects/DesafioDaForca/Privacy';

const Root = (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/transitcourse/about" element={<TransitCourse />} />
        <Route path="projects/desafiodaforca/privacy" element={<PrivacyDesafioDaForca />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(Root);
