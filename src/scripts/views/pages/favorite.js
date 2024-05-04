import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import { loadingAppInititator, blankDataDisplay, emptyListRestaurant } from '../../utils/loading-app-inititator';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const mainContent = document.querySelector('#maincontent');
    const jumbotron = document.querySelector('.jumbotron');
    const navbar = document.querySelector('.navbar');
    if (jumbotron) {
      jumbotron.style.display = 'none';
    }
    navbar.style.backgroundColor = '#212529';
    navbar.style.position = 'relative';
    mainContent.innerHTML = `
      <section class="explore-restaurant">    
        <div class="container">      
          <div class="title-content">
              <h1 class="title">Explore Restaurant</h1>
              <div class="line"></div>
          </div>        
          <div class="list-content"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    loadingAppInititator('');

    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const restaurantContainer = document.querySelector('.list-content');
    const title = document.querySelector('.title-content .title');
    title.innerText = 'Favorite Restaurant';

    if (restaurants) {
      if (restaurants.length === 0) {
        restaurantContainer.innerHTML = emptyListRestaurant();
      }
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = blankDataDisplay();
    }

    loadingAppInititator('none');
  },
};

export default Favorite;
