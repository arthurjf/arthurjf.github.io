import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import App from './App';
import About from './sections/About';
import Privacy from './sections/Privacy';
import NotFound from './sections/NotFound';

const Root = (
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(Root);
