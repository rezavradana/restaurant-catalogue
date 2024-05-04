/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Empty favorite restaurants', async ({ I }) => {
  I.see('There is nothing restaurant in here', '.blank-data');
});

Scenario('Liking one restaurant and unlike one restaurant ', async ({ I }) => {
  // Menyukai salah satu restaurant
  I.amOnPage('/#/home');

  I.seeElement('.detail-content a');
  const firstRestaurant = locate('.detail-content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('[aria-label="like this restaurant"]');
  I.click('#likeButton');

  // Batal menyukai restaurant tersebut
  I.amOnPage('/#/favorite');
  I.seeElement('.detail-content a');
  const firstFavoriteRestaurant = locate('.detail-content a').first();
  const firstFavoriteRestaurantTitle = await I.grabTextFrom(firstFavoriteRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);
  I.click(firstFavoriteRestaurant);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There is nothing restaurant in here', '.blank-data');
});

Scenario('Adding customer reviews to a restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.seeElement('.detail-content a');
  const firstRestaurant = locate('.detail-content a').first();
  I.click(firstRestaurant);

  I.seeElement('.add-review #title-review');
  I.seeElement('.add-review #review');
  I.seeElement('form button');

  const inputTitle = 'Kevin';
  const inputReview = 'Makanannya sangat enak:)';
  I.fillField('.add-review #title-review', inputTitle);
  I.fillField('.add-review #review', inputReview);
  I.click('form button');

  const titles = await I.grabTextFromAll('.item-review span');
  const reviews = await I.grabTextFromAll('.item-review p');

  const lastTitle = titles[titles.length - 1];
  const lastReview = reviews[reviews.length - 1];

  assert.strictEqual(inputTitle, lastTitle);
  assert.strictEqual(inputReview, lastReview);
});
