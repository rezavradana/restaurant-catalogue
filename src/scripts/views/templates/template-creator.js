import CONFIG from '../../globals/config';
import selectMenuButton from '../../utils/menu-button';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
    <div class="content">
        <div class="thumbnail-content">
            <div class="wrapper-city">
                <p>${restaurant.city}</p>
            </div> 
            <img class="lazyload" data-src="${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}" alt="Gambar Restaurant">
        </div>

        <div class="body-content">
            <span>Rating: ${restaurant.rating}</span>
            <h1>${restaurant.name}</h1>
            <div class="detail-content">            
                <a href="#/detail/${restaurant.id}">More Details</a>
            </div>
        </div>                                        
    </div>
`;

const createSkeletonUIRestaurantItem = () => `
    <div class="content">
        <div class="thumbnail-content skeleton">            
            <img>
        </div>

        <div class="body-content">
            <span class="skeleton"></span>
            <h1 class="skeleton"></h1>
            <div class="detail-content"></div>
        </div>                                        
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <div class="content">
            <div class="thumbnail-content">
                <div class="wrapper-city">
                    <p>${restaurant.city}</p>
                </div>
                <img src="${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}" alt="Gambar Restaurant">
            </div>

            <div class="body-content">
                <h1>${restaurant.name}</h1>
                <span>Rating: ${restaurant.rating}</span>
                <span>Adress: ${restaurant.address}</span>
                <p>${restaurant.description}</p>
            </div>

            <div class="menu-content">
                <div class="title">
                    <h1>Menu</h1>
                    <div class="line"></div>
        
                    <div class="btn-wrapper">
                        <button class="btn-food">Food</button>
                        <button class="btn-drink">Drink</button>
                    </div>
                </div>
                <div class="list-menu"></div>
            </div>

            <div class="review-content">
                <div class="title">
                    <h1>Add Your Review</h1>
                    <div class="line"></div>
                </div>
    
                <form>
                    <div class="add-review">
                        <input type="text" id="title-review" name="title-review" required autocomplete="title" 
                        placeholder="Enter Your Name">
                    </div>

                    <div class="add-review">
                        <textarea name="review" id="review" required maxlength="500" placeholder="Add Your Review"></textarea>        
                    </div>
                    <button>Add Review</button>
                </form>           
            </div>

            <div class="review-restaurant">
                <div class="title">
                    <h1>Review</h1> 
                    <div class="line"></div>
                </div>
                <div class="list-review">
                    
                </div>
            </div>
        </div>
    </div>
    `;

const itemListReview = (customerReviews) => {
  const listReview = document.querySelector('.list-review');
  listReview.innerHTML = '';
  customerReviews.forEach((review) => {
    listReview.innerHTML += `
              <div class="item-review">
                  <span>${review.name}</span>
                  <p>${review.review}</p>
              </div>
              `;
  });
};

const createDetailMenu = (restaurant) => {
  const btnFood = document.querySelector('.btn-food');
  const btnDrink = document.querySelector('.btn-drink');
  const listMenu = document.querySelector('.list-menu');

  selectMenuButton({
    btnFood, btnDrink, listMenu, restaurant,
  });
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createSkeletonUIRestaurantItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createDetailMenu,
  itemListReview,
};
