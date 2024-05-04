import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../route/url-parser';
import routes from '../route/routes';

class App {
  constructor({
    hamburgerButton, navbarUl, mainContent,
  }) {
    this._hamburgerButton = hamburgerButton;
    this._navbarUl = navbarUl;
    this._mainContent = mainContent;

    this._initalAppShell();
  }

  _initalAppShell() {
    DrawerInitiator.init({
      hamburgerButton: this._hamburgerButton,
      navbarUl: this._navbarUl,
      mainContent: this._mainContent,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await page.render();
    await page.afterRender();
  }
}

export default App;
