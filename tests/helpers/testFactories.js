/* eslint-disable import/prefer-default-export */
import FavoriteRestaurant from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
