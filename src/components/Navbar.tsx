import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav data-topnav>
      <a href="/" className="text-xl font-bold" style={{ textDecoration: 'none', color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/logo.svg" alt="Engineer Playbook Logo" style={{ height: '32px', width: '32px' }} />
        Engineer Playbook
      </a>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-4)' }}>
        {/* Desktop Links - hidden on mobile via CSS media query if we strictly followed Oat, 
            but here we'll use a simple inline style for now or standard Oat classes. 
            Oat doesn't have a 'hidden-md' utility by default in the minified version I saw, 
            so we might rely on standard CSS or the 'is-mobile' pattern if available.
            For now, let's just render them as simple links as Oat intended for topnav.
        */}
        <a href="/tutorials" onClick={(e) => { e.preventDefault(); window.location.href = '/tutorials'; }}>Tutorials</a>
        <a href="/blogs" onClick={(e) => { e.preventDefault(); window.location.href = '/blogs'; }}>Blogs</a>
        <a href="/profile" onClick={(e) => { e.preventDefault(); window.location.href = '/profile'; }}>Profile</a>
        <a href="/tutorials/playground" onClick={(e) => { e.preventDefault(); window.location.href = '/tutorials/playground'; }}>Playground</a>
      </div>
    </nav>
  );
};

export default Navbar;
