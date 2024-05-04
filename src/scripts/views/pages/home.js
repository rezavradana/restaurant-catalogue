import RestaurantDbSource from '../../data/restaurantdb-source';
import { loadingAppInititator, blankDataDisplay, emptyListRestaurant } from '../../utils/loading-app-inititator';
import { createRestaurantItemTemplate, createSkeletonUIRestaurantItem } from '../templates/template-creator';

const Home = {
  async render() {
    const jumbotron = document.querySelector('.jumbotron');
    const mainContent = document.querySelector('#maincontent');
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = '';
    navbar.style.position = 'absolute';
    jumbotron.style.display = 'block';

    mainContent.innerHTML = `
      <section class="explore-restaurant">    
        <div class="container">      
          <div class="title-content">
              <h1>Explore Restaurant</h1>
              <div class="line"></div>
          </div>        
          <div class="list-content"></div>
        </div>
      </section>
      <our-kitchen class="our-kitchen"></our-kitchen>
      <popular-dish class="popular-dish"></popular-dish>
    `;
  },

  async afterRender() {
    loadingAppInititator('');
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#maincontent');

    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.list-content');
    if (restaurants) {
      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = emptyListRestaurant();
      } else {
        // eslint-disable-next-line no-unused-vars
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createSkeletonUIRestaurantItem();
        });

        setTimeout(() => {
          restaurantsContainer.innerHTML = '';
          restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
          });
        }, 100);
      }
    } else {
      restaurantsContainer.innerHTML = blankDataDisplay();
    }

    loadingAppInititator('none');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });
  },
};

export default Home;
