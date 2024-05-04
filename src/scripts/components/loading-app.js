import { animate, stagger } from 'motion';

class LoadingApp extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    this.render();
  }

  connectedCallback() {
    const segments = this._shadowRoot.querySelectorAll('.segment');
    const numSegmentsLength = this._shadowRoot.querySelectorAll('.segment').length;
    const offset = 0.09;

    setTimeout(() => {
      animate(
        segments,
        { opacity: [0, 1, 0] },
        {
          offset: [0, 0.1, 1],
          duration: numSegmentsLength * offset,
          delay: stagger(offset),
          repeat: Infinity,
        },
      );
    }, 1000);
  }

  _updateStyle() {
    this._style.textContent = `
            :host{
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10000;
            }

            .segment {
                opacity: 0;
                fill: #F8E559;
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
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <g class="segment">
            <path
                id="loading-path"
                d="M 94 25 C 94 21.686 96.686 19 100 19 L 100 19 C 103.314 19 106 21.686 106 25 L 106 50 C 106 53.314 103.314 56 100 56 L 100 56 C 96.686 56 94 53.314 94 50 Z"
            ></path>
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(45deg); transform-origin: 100px 100px"
            />
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(90deg); transform-origin: 100px 100px"
            />
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(135deg); transform-origin: 100px 100px"
            />
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(180deg); transform-origin: 100px 100px"
            />
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(225deg); transform-origin: 100px 100px"
            />
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(270deg); transform-origin: 100px 100px"
            />
            </g>
            <g class="segment">
            <use
                href="#loading-path"
                style="transform: rotate(315deg); transform-origin: 100px 100px"
            />
            </g>
            </svg>
        `;
  }
}

customElements.define('loading-app', LoadingApp);
