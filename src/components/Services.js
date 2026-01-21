import React from "react";

const Services = () => {
  const services = [
    {
      icon: "fa-laptop",
      title: "Diseño Web",
      description:
        "Primero lo primero. Diseño responsive. Prueba de navegador. Depuración completa. Tareas específicas y claras con el Equipo.",
    },
    {
      icon: "fa-laptop-code",
      title: "Desarrollo Web",
      description:
        "Desarrollos ágiles. Scrum. Siempre las últimas tecnologías. Siempre pensando en el costo computacional. Servidores totalmente gestionados por nosotros.",
    },
    {
      icon: "fa-search",
      title: "Arquitectura Web",
      description:
        "Diseño y estructuración de componentes de aplicación web, para su funcionamiento de manera eficiente, escalable y segura. Definición de las interacciones del cliente, servidor y otros servicios involucrados.",
    },
    {
      icon: "fa-cogs",
      title: "Automatizaciones",
      description:
        "Optimización de procesos repetitivos mediante scripts y herramientas automatizadas. Integración de sistemas, flujos de trabajo automatizados y reducción de tareas manuales para mayor eficiencia.",
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
            Servicios
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            Mis Servicios
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
