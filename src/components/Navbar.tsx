import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav data-topnav>
      <a href="/" className="text-xl font-bold" style={{ textDecoration: 'none', color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/logo.svg" alt="Engineer Playbook Logo" style={{ height: '32px', width: '32px' }} />
        Engineer Playbook
      </a>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-4)' }}>
        <a href="/blogs" onClick={(e) => { e.preventDefault(); window.location.href = '/blogs'; }}>Blogs</a>
        <a href="/tutorials" onClick={(e) => { e.preventDefault(); window.location.href = '/tutorials'; }}>Tutorials</a>
        <a href="/profile" onClick={(e) => { e.preventDefault(); window.location.href = '/profile'; }}>Profile</a>
        <a href="/tutorials/playground" onClick={(e) => { e.preventDefault(); window.location.href = '/tutorials/playground'; }}>Playground</a>
      </div>
    </nav>
  );
};

export default Navbar;
