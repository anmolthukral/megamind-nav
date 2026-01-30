// Universal nav web component loader
const DEFAULT_NAV_SRC = 'https://megamind-nav.vercel.app/nav-fragment';

class EngineeringPlaybookNav extends HTMLElement {
  constructor(){
    super();
    this._shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    const src = this.getAttribute('data-src') || DEFAULT_NAV_SRC;
    // lightweight loading indicator
    this._shadow.innerHTML = `<div aria-busy="true">Loading navigation…</div>`;

    fetch(src, { mode: 'cors' })
      .then(resp => {
        if (!resp.ok) throw new Error('Failed to fetch nav fragment: ' + resp.status);
        return resp.text();
      })
      .then(html => this._render(html))
      .catch(err => this._renderError(err));
  }

  _render(html){
    // Basic style scoping so the nav looks consistent but still allows override
    const style = `
      :host{display:block}
      .nav-wrap{all:initial;display:block}
    `;
    this._shadow.innerHTML = `<style>${style}</style><div class="nav-wrap">${html}</div>`;
    // hide fallback nav if present on the host page
    try {
      const fb = document.getElementById('fallback-nav');
      if (fb) fb.style.display = 'none';
    } catch (e) { /* ignore in strict environments */ }
  }

  _renderError(err){
    console.error(err);
    // fallback minimal nav
    this._shadow.innerHTML = `<nav><a href="/">Home</a></nav>`;
  }
}

if (!customElements.get('engineering-playbook-nav')) {
  customElements.define('engineering-playbook-nav', EngineeringPlaybookNav);
}

// helpful module export for consumers that prefer to import the class
export { EngineeringPlaybookNav };
