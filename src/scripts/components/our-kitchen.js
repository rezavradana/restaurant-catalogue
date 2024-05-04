class OurKitchen extends HTMLElement {
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
    .container{
      width: 100%;
      height: fit-content;
      position: relative;
      box-sizing: border-box;
    }
    
    .container img{
      width: 100%;
      height: 700px;
      object-fit: cover;
    }
    
    .container .kitchen-content{
      display: flex;
      flex-flow: column nowrap;
      position: absolute;
      padding: 50px;
      max-width: 700px;
      height: 100%;
      justify-content: center; 
      box-sizing: border-box;
    }
    
    .container .kitchen-content .kitchen-text{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #ffff;
      padding: 40px;
      line-height: 1.5rem;
    }
    
    .container .kitchen-content .kitchen-text h1, .popular-dish .title h1, .explore-restaurant .title-content h1{
      font-size: 30px;
    }
    
    .container .kitchen-content .kitchen-text .line{
      border: 1px solid #212529;
    }
    
    .container .kitchen-content .kitchen-text p{
      text-align: justify;
      font-size: 16px;
    }

    @media screen and (max-width: 600px) {
      .container .kitchen-content .kitchen-text h1{
        font-size: 25px;
      }
    
      .container .kitchen-content .kitchen-text p{
        font-size: 14px;
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
    this._shadowRoot.innerHTML
      += `
      <div class="container">      
        <div class="kitchen-content">
          <div class="kitchen-text">
              <h1>Our Kitchen</h1>    
              <div class="line"></div>      
              <p>Our kitchen is the heart of our restaurant, where creativity and expertise come together to craft unforgettable dishes. Led by our talented chefs, each recipe is a fusion of flavors and passion, using the finest ingredients sourced locally and globally. From the sizzle of the stove to the artful plating, our kitchen is where every culinary masterpiece begins its journey to your table.</p>
          </div>
        </div>
        <picture>
          <source media="(max-width: 600px)" srcset="images/image-sharp/hero-image-1-small.jpg">
          <img src="images/image-sharp/hero-image-1-large.jpg" alt="">
        </picture>
      </div>
      `;
  }
}

customElements.define('our-kitchen', OurKitchen);
