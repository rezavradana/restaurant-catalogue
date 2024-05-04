import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  // eslint-disable-next-line consistent-return
  static async addReview(review) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      };
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const responseJson = await response.json();
      console.log(responseJson);
      // eslint-disable-next-line no-alert
      alert('thank you for your review');
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  }
}

export default RestaurantDbSource;
