import React from "react";
import useTranslation from "../i18n/useTranslation";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: "fa-laptop",
      title: t("services.web_design.title"),
      description: t("services.web_design.description"),
    },
    {
      icon: "fa-laptop-code",
      title: t("services.web_dev.title"),
      description: t("services.web_dev.description"),
    },
    {
      icon: "fa-search",
      title: t("services.architecture.title"),
      description: t("services.architecture.description"),
    },
    {
      icon: "fa-cogs",
      title: t("services.automation.title"),
      description: t("services.automation.description"),
    },
  ];

  return (
    <div className="container-fluid pt-5" id="service">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            {t("services.bg_title")}
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            {t("services.title")}
          </h1>
        </div>
        <div className="row pb-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 text-center mb-5"
            >
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mb-4">
                <i
                  className={`fa fa-2x ${service.icon} service-icon bg-primary text-white mb-3 mb-sm-0 mr-sm-3`}
                ></i>
                <h4 className="font-weight-bold m-0">{service.title}</h4>
              </div>
              <p className="px-3 px-md-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
