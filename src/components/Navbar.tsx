import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import logo from "@/assets/icono_1.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Misión", href: "#mission" },
  { name: "Servicios", href: "#services" },
  { name: "Beneficios", href: "#benefits" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Galería", href: "#gallery" },
  { name: "Contacto", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Mobile menu rendered via portal so it is not clipped by parent stacking contexts
  const MobileMenuPortal: React.FC = () =>
    createPortal(
      <>
        {/* Overlay backdrop */}
        <div className="fixed inset-0 bg-black/30 z-40" onClick={toggleMenu} />
        {/* Sidebar panel */}
        <div className="fixed top-0 left-0 h-full w-72 bg-yellow-50 shadow-xl z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 h-14 sm:h-16 border-b border-yellow-200">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
              <span className="font-serif text-lg font-bold text-yellow-900">Amanecer</span>
            </div>
            <button
              onClick={toggleMenu}
              className="p-1.5 rounded-md text-green-900 hover:text-yellow-700 hover:bg-yellow-100/50"
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-4 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-green-900 rounded-md hover:bg-yellow-100/50 hover:text-yellow-700 transition-colors duration-200"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </>,
      document.body
    );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-900 via-yellow-100 to-green-700 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img src={logo} alt="Ama-Necer Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-md border-2 border-yellow-300" />
            <span className="font-serif text-lg sm:text-2xl font-bold text-yellow-900 tracking-wide drop-shadow whitespace-nowrap">Amanecer</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1 max-w-3xl mx-auto">
            <ul className="flex justify-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-900 text-sm xl:text-base font-medium hover:text-yellow-700 transition-colors duration-200 px-2 py-1 rounded hover:bg-yellow-100/20 whitespace-nowrap"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Menú principal"
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-green-900 hover:text-yellow-700 hover:bg-yellow-100/20 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu rendered via portal */}
      {isMenuOpen && <MobileMenuPortal />}
    </nav>
  );
};

export default Navbar;
