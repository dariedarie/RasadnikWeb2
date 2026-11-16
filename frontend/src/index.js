import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Preloader (public/index.html): sklanja se kad se React iscrta. Prvi put u sesiji ostaje dok se
// animacija drveta ne završi (~1.6 s od početka učitavanja), kasnije se sklanja odmah.
const preloader = document.getElementById('preloader');
if (preloader) {
  let seen = false;
  try { seen = sessionStorage.getItem('plSeen') === '1'; sessionStorage.setItem('plSeen', '1'); } catch (e) {}
  const wait = seen ? 0 : Math.max(0, 1650 - performance.now());
  setTimeout(() => requestAnimationFrame(() => {
    preloader.classList.add('pl-done');
    setTimeout(() => preloader.remove(), 900);
  }), wait);
}
