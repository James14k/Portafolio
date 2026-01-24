import React from "react";
import useTranslation from "../i18n/useTranslation";

const Qualification = () => {
  const { t } = useTranslation();
  
  const education = [
    {
      title: t("qualification.education.1.title"),
      institution: t("qualification.education.1.institution"),
      period: t("qualification.education.1.period"),
    },
    {
      title: t("qualification.education.2.title"),
      institution: t("qualification.education.2.institution"),
      period: t("qualification.education.2.period"),
    },
    {
      title: t("qualification.education.3.title"),
      institution: t("qualification.education.3.institution"),
      period: t("qualification.education.3.period"),
    },
    {
      title: t("qualification.education.4.title"),
      institution: t("qualification.education.4.institution"),
      period: t("qualification.education.4.period"),
    },
  ];

  const experience = [
    {
      position: t("qualification.experience.1.position"),
      period: t("qualification.experience.1.period"),
      description: t("qualification.experience.1.description"),
    },
    {
      position: t("qualification.experience.2.position"),
      period: t("qualification.experience.2.period"),
      description: t("qualification.experience.2.description"),
    },
    {
      position: t("qualification.experience.3.position"),
      period: t("qualification.experience.3.period"),
      description: t("qualification.experience.3.description"),
    },
    {
      position: t("qualification.experience.4.position"),
      period: t("qualification.experience.4.period"),
      description: t("qualification.experience.4.description"),
    },
    {
      position: t("qualification.experience.5.position"),
      period: t("qualification.experience.5.period"),
      description: t("qualification.experience.5.description"),
    },
  ];

  return (
    <div className="container-fluid py-5" id="qualification">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            {t("qualification.bg_title")}
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            {t("qualification.title")}
          </h1>
        </div>
        <div className="row align-items-start">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <h3 className="mb-4 text-center text-lg-left">
              {t("qualification.education_title")}
            </h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {education.map((edu, index) => (
                <div key={index} className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">{edu.title}</h5>
                  <p className="mb-2">
                    <strong>{edu.institution}</strong>
                    <br />
                    <small>{edu.period}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="mb-4 text-center text-lg-left">
              {t("qualification.experience_title")}
            </h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {experience.map((exp, index) => (
                <div key={index} className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">{exp.position}</h5>
                  {exp.period && (
                    <p>
                      <small>{exp.period}</small>
                    </p>
                  )}
                  <p className="mb-2" style={{ whiteSpace: "pre-line" }}>
                    <strong>{exp.description}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
