import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  sections: {
    id: string;
    icon: React.ElementType;
    title: string;
  }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">EcoWaste</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {title}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map(({ id, title, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}