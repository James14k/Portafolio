import React, { useState, useEffect } from "react";
import useTranslation from "../i18n/useTranslation";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { t, language, changeLanguage } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    // Verifiqué posición inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setActiveLink(target);
    setIsMenuOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.offsetTop - 45;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Definir navLinks dentro del render para que use t() dinámicamente
  const navLinks = [
    { id: "home", label: t("navbar.home") },
    { id: "about", label: t("navbar.about") },
    { id: "qualification", label: t("navbar.qualification") },
    { id: "skill", label: t("navbar.skills") },
    { id: "service", label: t("navbar.services") },
    { id: "portfolio", label: t("navbar.portfolio") },
    { id: "certificates", label: t("navbar.certificates") },
    { id: "blog", label: t("navbar.blog") },
    { id: "contact", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={`navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5`}
      style={{
        display: isScrolled ? "flex" : "none",
        opacity: isScrolled ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <a
        href="#home"
        className="navbar-brand ml-lg-3 px-2"
        onClick={(e) => handleNavClick(e, "home")}
      >
        <h1 className="m-0" style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}>
          <span className="text-primary">Hawk</span>Durant
        </h1>
      </a>
      
      {/* Controles móviles: tema + idioma + toggle */}
      <div className="d-flex align-items-center d-lg-none">
        {/* Botón de tema para móvil */}
        <button
          className="btn btn-sm btn-outline-primary mr-2"
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          style={{ 
            padding: "0.25rem 0.5rem",
            fontSize: "0.9rem"
          }}
        >
          <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
        </button>
        
        {/* Selector de idioma móvil */}
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="form-control form-control-sm mr-2"
          style={{ 
            width: "60px", 
            fontSize: "0.75rem",
            padding: "0.25rem 0.3rem"
          }}
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
      
      <button
        type="button"
        className="navbar-toggler"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div 
        className={`collapse navbar-collapse px-lg-3 ${isMenuOpen ? 'show' : ''}`} 
        id="navbarCollapse"
      >
        <div className="navbar-nav m-auto py-0">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item nav-link ${activeLink === link.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, link.id)}
              style={{ 
                whiteSpace: "nowrap",
                fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                padding: "0.5rem 0.75rem"
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Controles desktop: tema + idioma */}
        <div className="d-none d-lg-flex align-items-center ml-auto">
          {/* Botón de tema para desktop */}
          <button
            className="btn btn-sm btn-outline-primary mr-2"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={isDarkMode ? "Modo claro" : "Modo oscuro"}
            style={{ 
              padding: "0.4rem 0.6rem",
              fontSize: "1rem"
            }}
          >
            <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
          
          {/* Selector de idioma para desktop */}
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="form-control form-control-sm"
            style={{ width: "90px" }}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
