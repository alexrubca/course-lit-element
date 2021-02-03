import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
    <div>Llevas ${this.counter} clics</div>
    <div>
      <button @click="${this.increase}">+1</button>
      <button @click="${this.decrease}">-1</button>
    </div>
    <feedback-element id="feedback"></feedback-element>
    `;
  }

  get feedback() {
    return this.shadowRoot.getElementById('feedback');
  }

  increase() {
    this.counter++;

    if (this.counter === 5) {
      this.feedback.open('Has llegado a 5 clics');
    }
  }

  decrease() {
    this.counter--;

    if (this.counter === 0) {
      this.feedback.open('Has vuelto a 0 clics');
    }
  }
}
customElements.define('my-counter', MyCounter);