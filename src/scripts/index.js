import 'regenerator-runtime'; /* for async await transpile */
import swRegister from './utils/sw-register';
import App from './views/app';
import '../styles/main.scss';
import './components/our-kitchen';
import './components/popular-dish';
import './components/loading-app';

const app = new App({
  hamburgerButton: document.querySelector('#hamburger'),
  navbarUl: document.querySelector('.ul-list'),
  mainContent: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
