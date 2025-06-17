import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <MessageSquare className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">poupa.ai</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Início
          </a>
          <a 
            href="#how-it-works" 
            className="font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Funcionalidades
          </a>
          <a 
            href="#pricing" 
            className="font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Preço
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fadeInUp">
          <div className="container-custom flex flex-col gap-4">
            <a 
              href="#" 
              className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Funcionalidades
            </a>
            <a 
              href="#pricing" 
              className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Preço
            </a>
            <a 
              href="#" 
              className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;