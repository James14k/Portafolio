import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="container text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          <a
            className="btn btn-light btn-social mr-2"
            href="https://www.github.com/james14k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="btn btn-light btn-social mr-2"
            href="https://www.linkedin.com/in/hawkdurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="d-flex flex-wrap justify-content-center mb-3 px-2">
          <p className="text-white mb-1 mb-md-0">GitHub</p>
          <span className="px-2 px-md-3 d-none d-md-inline">|</span>
          <p className="text-white mb-1 mb-md-0">Linkedin</p>
        </div>
        <p className="m-0 px-2" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
          &copy; 2025 Desarrollado con{' '}
          <img src="/img/favicon.svg" className="text-white font-weight-bold" width="20px" alt="pasión" /> por{' '}
          <strong>Hawk Durant</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;

