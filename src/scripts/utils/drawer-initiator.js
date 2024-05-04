const DrawerInitiator = {
  init({
    hamburgerButton, navbarUl, mainContent,
  }) {
    hamburgerButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, navbarUl);
    });

    hamburgerButton.addEventListener('keydown', (event) => {
      if (event.key === 'Space') {
        this._toggleDrawer(event, navbarUl);
      }
    });

    mainContent.addEventListener('click', (event) => {
      this._closeDrawer(event, navbarUl);
    });
  },

  _toggleDrawer(event, navbarUl) {
    event.stopPropagation();
    navbarUl.classList.toggle('open');
  },

  _closeDrawer(event, navbarUl) {
    event.stopPropagation();
    navbarUl.classList.remove('open');
  },
};

export default DrawerInitiator;
