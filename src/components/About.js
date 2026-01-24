import React from "react";
import { FaGithub } from "react-icons/fa";
import useTranslation from "../i18n/useTranslation";

const About = () => {
  const { t } = useTranslation();
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 45;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            {t("about.bg_title")}
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {t("about.title")}
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 pb-4 pb-lg-0 text-center">
            <img
              className="img-fluid rounded-circle shadow"
              style={{
                maxWidth: "280px",
                width: "280px",
                height: "280px",
                objectFit: "cover",
                objectPosition: "center top",
                border: "4px solid var(--primary, #00A896)",
              }}
              src="/img/profile.png"
              alt="Hawk Durant"
            />
          </div>
          <div className="col-12 col-lg-7 text-center text-lg-left">
            <h3 className="mb-4">{t("about.profession")}</h3>
            <p>{t("about.description")}</p>
            <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
              <a
                href="#contact"
                className="btn btn-outline-primary mr-sm-4 mb-3 mb-sm-0"
                onClick={scrollToContact}
              >
                {t("about.hire_me")}
              </a>
              <a
                href="https://www.github.com/james14k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <FaGithub /> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
