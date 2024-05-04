import RestaurantDbSource from '../data/restaurantdb-source';
import { itemListReview } from '../views/templates/template-creator';

const addReviewButton = (id) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.querySelector('#title-review').value;
    const review = document.querySelector('#review').value;
    const dataReview = { id, name, review };

    const restaurantAddReview = await RestaurantDbSource.addReview(dataReview);
    if (restaurantAddReview.message === 'success') {
      itemListReview(restaurantAddReview.customerReviews);
    }
  });
};

export default addReviewButton;
