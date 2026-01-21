import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    // Verifiqué posición inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setActiveLink(target);
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.offsetTop - 45;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Acerca de' },
    { id: 'qualification', label: 'Formación' },
    { id: 'skill', label: 'Habilidades' },
    { id: 'service', label: 'Servicios' },
    { id: 'portfolio', label: 'Portafolio' },
    // { id: 'testimonial', label: 'Reseñas' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className={`navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5`} style={{ display: isScrolled ? 'flex' : 'none', opacity: isScrolled ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
      <a href="#home" className="navbar-brand ml-lg-3 px-2" onClick={(e) => handleNavClick(e, 'home')}>
        <h1 className="m-0" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
          <span className="text-primary">Hawk</span>Durant
        </h1>
      </a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

