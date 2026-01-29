import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import { r2wc } from 'r2wc';
import Navbar from './components/Navbar';
import './index.css'

// If running in dev mode (standalone), render to root
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

// Register as Web Component
const WebNavbar = r2wc(Navbar, { props: {} }); // Add props here if needed
customElements.define('engineering-playbook-nav', WebNavbar);
