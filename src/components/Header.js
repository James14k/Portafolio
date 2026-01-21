import React from 'react';

const Header = () => {
  return (
    <div 
      className="container-fluid d-flex align-items-center mb-5 py-5 position-relative" 
      id="home" 
      style={{ 
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Agregué overlay oscuro para mejorar legibilidad del texto */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      ></div>
      <div className="container position-relative d-flex align-items-center justify-content-center" style={{ zIndex: 2, minHeight: '100vh' }}>
        <div className="text-center px-3" style={{ maxWidth: '800px' }}>
          <h1 
            className="text-uppercase text-white mb-3 font-weight-bold" 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              letterSpacing: '0.1em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            Hawk Durant
          </h1>
          <h2 
            className="text-white mb-4 font-weight-light" 
            style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              letterSpacing: '0.05em',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
            }}
          >
            Ingeniero Informático
          </h2>
          <p 
            className="text-white mb-5 mx-auto" 
            style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: '600px',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            Especialista en desarrollo de software con enfoque en arquitecturas modernas y microservicios, comprometido con la implementación de buenas prácticas y la entrega de código de alta calidad."
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
            <a
              href="https://drive.google.com/file/d/1gPQUrjmAGJKJ31WBqHIXGygaEDIHLpPN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg px-4 py-2 mb-3 mb-sm-0 mr-sm-3"
              style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                borderRadius: '30px',
                borderWidth: '2px',
                transition: 'all 0.3s ease'
              }}
            >
              Descargar C.V
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-lg px-4 py-2"
              style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                borderRadius: '30px',
                transition: 'all 0.3s ease'
              }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 45;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

