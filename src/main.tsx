import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import Navbar from './components/Navbar';
import './index.css'

class WebNavbar extends HTMLElement {
  private root: Root | null = null;

  connectedCallback() {
    if (!this.root) {
      // Render directly into the custom element (Light DOM)
      this.root = createRoot(this);
      this.root.render(
        <StrictMode>
          <Navbar />
        </StrictMode>
      );
    }
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

// Register as Web Component
if (!customElements.get('engineering-playbook-nav')) {
  customElements.define('engineering-playbook-nav', WebNavbar);
}

// Dev mode fallback is not really needed as we can just load the module, 
// but if we want standalone dev mode for common-nav:
if (import.meta.env.DEV) {
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <Navbar />
      </StrictMode>,
    )
  }
}
