import React from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav data-topnav className="navbar">
      <div className="container">
        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
          <img src="/logo.svg" alt="Engineer Playbook Logo" style={{ height: '32px', width: '32px' }} />
          Engineer Playbook
        </a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span style={{ fontSize: '1.5rem' }}>☰</span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="/blogs" className="nav-link" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="/tutorials" className="nav-link" onClick={() => setIsOpen(false)}>Tutorials</a>
          <a href="/profile" className="nav-link" onClick={() => setIsOpen(false)}>Profile</a>
          <a href="/tutorials/playground" className="nav-link" onClick={() => setIsOpen(false)}>Playground</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
