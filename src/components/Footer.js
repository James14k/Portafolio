import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white py-4 px-sm-3 px-md-5">
      <div className="container text-center">
        <div className="d-flex justify-content-center mb-3">
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
        <p className="m-0" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
          &copy; {new Date().getFullYear()} Desarrollado con ❤️ por{" "}
          <strong>Hawk Durant</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
