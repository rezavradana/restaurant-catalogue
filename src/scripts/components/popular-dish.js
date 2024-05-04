class PopularDish extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
    .container {
        width: 100%;
        margin: 20px auto;
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        width: 100%;
    }
    
    .container .title h1{
        font-size: 30px;
    }

    .container .title{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    .container .title .line{
        border: 2px solid #E30011;
        width: 150px;
    }

    .container .list-dish{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
    }

    .container .list-dish .dish-content{
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .container .list-dish .dish-content .dish-description{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container .list-dish .dish-content .dish-description h1{
        font-size: 20px;
        text-align: center;
        max-width: 100%;
    }

    .container .list-dish .dish-content img{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    
    @media screen and (max-width: 600px){
        .container .list-dish{
          grid-template-columns: repeat(1, 300px);
          row-gap: 2rem;
          justify-content:center;
        }
      
        .container .list-dish .dish-content .dish-description h1{
          font-size: 18px;
        }
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.append(this._style);
    this._shadowRoot.innerHTML += `
    <div class="container">    
        <div class="title">
            <h1>Our Popular Dish</h1>
            <div class="line"></div>
        </div>

        <div class="list-dish">
            <div class="dish-content">
                <picture>
                    <source media="(max-width: 600px)" srcset="images/image-sharp/food-image-1-small.jpg">
                    <img src="images/image-sharp/food-image-1-large.jpg" alt="Croissants Image">
                </picture>
                <div class="dish-description">
                    <h1>Croissants Crunch</h1>
                    <span>$8</span>
                </div>
            </div>

            <div class="dish-content">
                <picture>
                    <source media="(max-width: 600px)" srcset="images/image-sharp/food-image-2-small.jpg">
                    <img src="images/image-sharp/food-image-2-large.jpg" alt="Sues Cakes Image">
                </picture>
                <div class="dish-description">
                    <h1>Sues Cakes</h1>
                    <span>$15</span>
                </div>
            </div>
            
            <div class="dish-content">
                <picture>
                    <source media="(max-width: 600px)" srcset="images/image-sharp/food-image-3-small.jpg">
                    <img src="images/image-sharp/food-image-3-large.jpg" alt="Pancakes Berry Images">
                </picture>
                <div class="dish-description">
                    <h1>Pancakes Berry</h1>
                    <span>$10</span>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('popular-dish', PopularDish);
