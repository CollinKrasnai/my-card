import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Nittany Lion Shrine";
    this.image = "https://images.fineartamerica.com/images-medium-large-5/the-nittany-lion-shrine-mark-miller.jpg";
    this.description = "The Nittany Lion Shrine is a sculpture at Penn State University...";
    this.link = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      /* This new rule styles the card when the 'highlight' attribute is present */
      :host([highlight]) .info-card {
        background-color: #e0f2f1;
      }

      .info-card {
        max-width: 400px;
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid #e0e0e0;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
      }
      .info-card:hover, .info-card:focus-within {
        transform: translateY(-8px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }
      .card-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        display: block;
      }
      .card-content { padding: 24px; }
      .card-title {
        margin-top: 0;
        margin-bottom: 8px;
        color: #1c1e21;
      }
      .card-text {
        margin-top: 0;
        margin-bottom: 24px;
        color: #606770;
        line-height: 1.5;
      }
      .details-btn {
        display: block;
        padding: 16px 24px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        background-color: #00529b;
        transition: background-color 0.3s ease;
      }
      .details-btn:hover, .details-btn:focus {
        background-color: #0073e6;
      }
      @media (max-width: 500px) {
        .card-content { padding: 16px; }
      }
    `;
  }

  render() {
    return html`
      <div class="info-card">
        <img class="card-image" src="${this.image}" alt="Card Image">
        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>
          <p class="card-text">${this.description}</p>
          <a href="${this.link}" class="details-btn" target="_blank">Details</a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);