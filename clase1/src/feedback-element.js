import { LitElement, html } from 'lit-element';

export class FeedbackElement extends LitElement {

  static get properties() {
    return {
      msg: { type: String },
      opened: { type: Boolean }
    };
  }

  render() {
    return html`
    <style>
      div {
        position: fixed;
        bottom: 0;
        left: 0;
        overflow: hidden;
        height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e74c3c;
        color: white;
        width: 100%;
        transition: all .7s ease-in;
        font-size: 1px;
      }
      .opened {
        height: 5rem;
        font-size: 1rem;
      }
    </style>
      <div class="${this.opened ? 'opened' : ''}">
        ${this.msg}
      </div>
    `;
  }

  open(message) {
    this.msg = message;
    this.opened = true;

    setTimeout(() => this.opened = false, 3000);
  }
}
customElements.define('feedback-element', FeedbackElement);