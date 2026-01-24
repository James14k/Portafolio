import React from "react";
import useTranslation from "../i18n/useTranslation";

const Header = () => {
  const { t, getCVLink } = useTranslation();

  return (
    <div
      className="container-fluid d-flex align-items-center mb-5 py-5 position-relative"
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/img/header.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      <div
        className="container position-relative d-flex align-items-center justify-content-center"
        style={{ zIndex: 2, minHeight: "100vh" }}
      >
        <div className="text-center px-3" style={{ maxWidth: "800px" }}>
          <h1
            className="text-uppercase text-white mb-3 font-weight-bold"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              letterSpacing: "0.1em",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {t("header.name")}
          </h1>
          <h2
            className="text-white mb-4 font-weight-light"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "0.05em",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            {t("header.title")}
          </h2>
          <p
            className="mb-5 mx-auto"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              maxWidth: "600px",
              lineHeight: "1.7",
              color: "#ffffff",
              fontWeight: "400",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            {t("header.description")}
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
            <a
              href={getCVLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg px-4 py-2 mb-3 mb-sm-0 mr-sm-3"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                borderRadius: "30px",
                borderWidth: "2px",
                transition: "all 0.3s ease",
              }}
            >
              {t("navbar.download_cv")}
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-lg px-4 py-2"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                borderRadius: "30px",
                transition: "all 0.3s ease",
              }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  const offsetTop = element.offsetTop - 45;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {t("navbar.contact")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
