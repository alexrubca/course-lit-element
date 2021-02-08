import { LitElement, html } from 'lit-element';
import './tag-list';
import './menu-overlay';

export class TestElement extends LitElement {

static get properties() {
  return {
    tags: { type: Array }
  };
}

constructor() {
  super();
  this.tags = [1, 5, 6, 88, 'Hola']
}

  render() {
    return html`
    <p>Estas son las etiquetas: <tag-list .tags="${this.tags}"></tag-list></p>

    <menu-overlay id="menu1">
      <p>Cualquier otra cosa...</p>
      <button @click="${this.close}">Cerrar</button>
      <button>Abrir</button>
      <button>Guardar</button>
      <div slot="trigger">Menú</div>
    </menu-overlay>
    `;
  }

  close() {
    this.shadowRoot.getElementById('menu1').close();
  }
}
customElements.define('test-element', TestElement);