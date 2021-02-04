import { LitElement, html } from 'lit-element';

export class helloWorld extends LitElement {

  static get properties() {
    return {
      name: { type: String }
    };
  }

  render() {
    return html`
      <p>Hola ${this.name}!!</p>
    `;
  }
}
customElements.define('hello-world', helloWorld);