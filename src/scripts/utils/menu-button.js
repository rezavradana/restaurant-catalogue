/* eslint-disable no-param-reassign */
import CONFIG from '../globals/config';

function selectMenuButton({
  btnFood, btnDrink, listMenu, restaurant,
}) {
  if (btnFood) {
    btnFood.addEventListener('click', () => {
      const menusFood = restaurant.menus.foods;
      listMenu.innerHTML = '';
      menusFood.forEach((menuFood) => {
        listMenu.innerHTML += `
                    <div class="item-menu">
                        <div class="img-menu">
                            <img src="${CONFIG.BASE_URL}/images/small/${restaurant.pictureId}" alt="Gambar Menu">
                        </div>
                
                        <div class="detail-menu">
                            <h1>${menuFood.name}</h1>
                            <span>$15</span>
                            <button class="order">ORDER</button>
                        </div>
                    </div>
                    `;
      });
    });
  }

  if (btnDrink) {
    btnDrink.addEventListener('click', () => {
      const menusDrink = restaurant.menus.drinks;
      listMenu.innerHTML = '';
      menusDrink.forEach((menuDrink) => {
        listMenu.innerHTML += `
                      <div class="item-menu">
                          <div class="img-menu">
                              <img src="${CONFIG.BASE_URL}/images/small/${restaurant.pictureId}" alt="Gambar Menu">
                          </div>
        
                          <div class="detail-menu">
                              <h1>${menuDrink.name}</h1>
                              <span>$15</span>
                              <button class="order">ORDER</button>
                          </div>
                      </div>
                      `;
      });
    });
  }
}

export default selectMenuButton;
