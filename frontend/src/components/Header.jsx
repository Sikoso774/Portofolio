import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, FileDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#hero')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-lg">
              ZK
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Zoléni Kokolo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-green-400 hover:bg-green-500/10"
              onClick={() => window.open('https://github.com/Sikoso774', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => alert('CV download functionality')}
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center border-green-600 text-green-400 hover:bg-green-500/10"
                onClick={() => window.open('https://github.com/Sikoso774', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => alert('CV download functionality')}
              >
                <FileDown className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
