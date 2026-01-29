import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: 'http://localhost:5173/' },
    { name: 'Tutorials', href: 'http://localhost:5173/state' },
    { name: 'Blogs', href: 'http://localhost:3000/' },
    { name: 'Profile', href: 'http://localhost:8080/' },
  ];

  return (
  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-bg-primary/90 backdrop-blur-md border-b border-white/10 text-text-primary font-sans shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="http://localhost:5173/" className="text-2xl font-bold font-heading bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Anmol Thukral
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-accent focus:outline-none p-2"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-text-secondary hover:text-accent hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
