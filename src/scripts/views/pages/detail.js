import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../route/url-parser';
import addReviewButton from '../../utils/add-review-button';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { loadingAppInititator, blankDataDisplay } from '../../utils/loading-app-inititator';
import { createRestaurantDetailTemplate, createDetailMenu, itemListReview } from '../templates/template-creator';

const Detail = {
  async render() {
    const mainContent = document.querySelector('#maincontent');
    const jumbotron = document.querySelector('.jumbotron');
    const navbar = document.querySelector('.navbar');
    navbar.style.position = 'relative';
    if (jumbotron) {
      jumbotron.style.display = 'none';
    }
    navbar.style.backgroundColor = '#212529';
    mainContent.innerHTML = `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    loadingAppInititator('');
    if (restaurant) {
      this.renderRestaurantDetail(restaurantContainer, restaurant);
    } else {
      restaurantContainer.innerHTML = blankDataDisplay();
    }
    loadingAppInititator('none');
  },

  renderRestaurantDetail(restaurantContainer, restaurant) {
    const elementRestaurantContainer = restaurantContainer;
    elementRestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    createDetailMenu(restaurant);
    itemListReview(restaurant.customerReviews);
    addReviewButton(restaurant.id);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
