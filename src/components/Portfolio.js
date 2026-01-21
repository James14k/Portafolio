import React, { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    // Proyectos Web
    {
      id: 1,
      image: "/img/tucredito.png",
      category: "first",
      title: "TuCrédito",
      description:
        "Sistema de gestión de créditos que permite administrar préstamos, pagos y clientes de manera eficiente.",
      technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
      github: "https://github.com/James14k/Gestion_de_credito",
      website: "https://example.com",
    },
    {
      id: 2,
      image: "/img/Zona_fit.png",
      category: "first",
      title: "Zona Fit",
      description:
        "Plataforma web para gimnasios con gestión de membresías, rutinas de entrenamiento y seguimiento de progreso.",
      technologies: ["React", "CSS3", "Firebase"],
      github: "https://github.com/James14k/James14k-Zona_fit",
      website: "https://example.com",
    },
    {
      id: 3,
      image: "/img/chatApp.png",
      category: "first",
      title: "Chat App",
      description:
        "Aplicación de mensajería en tiempo real con soporte para conversaciones individuales y grupales.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/James14k/chat-app",
      website: "https://example.com",
    },
    {
      id: 4,
      image: "/img/peluqueria_canina.png",
      category: "first",
      title: "Peluquería Canina",
      description:
        "Sistema de gestión para peluquerías caninas con reservas, historial de mascotas y facturación.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/James14k/Peluqueria-Canina-Java",
      website: "https://example.com",
    },
    {
      id: 5,
      image: "/img/PypTech.png",
      category: "first",
      title: "PypTech",
      description:
        "Sitio web corporativo para empresa de tecnología con catálogo de servicios y portafolio de proyectos.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "",
      website: "https://example.com",
    },
    {
      id: 6,
      image: "/img/HuertoHogar_Web.png",
      category: "first",
      title: "HuertoHogar Web",
      description:
        "Plataforma educativa sobre cultivo en casa con guías, consejos y seguimiento de plantas.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/James14k/Huerto-Hogar-React",
      website: "https://example.com",
    },
    {
      id: 7,
      image: "/img/Lashifield_web.png",
      category: "first",
      title: "Lashifield Web",
      description:
        "Sitio web para salón de belleza especializado en extensiones de pestañas y servicios estéticos.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      github: "",
      website: "https://example.com",
    },
    {
      id: 8,
      image: "/img/misterr_pastel.png",
      category: "first",
      title: "Misterr Pastel",
      description:
        "E-commerce de pastelería con catálogo de productos, carrito de compras y gestión de pedidos.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      github: "https://github.com/James14k/Mr-Pastel-React",
      website: "https://example.com",
    },
    {
      id: 9,
      image: "/img/pastel_milsabores.png",
      category: "first",
      title: "Pastelería Mil Sabores",
      description:
        "Sitio web para pastelería con galería de productos, pedidos personalizados y reservas online.",
      technologies: ["React", "CSS3", "Firebase", "Stripe"],
      github: "https://github.com/James14k/Pasteleria-Mil-Sabores",
      website: "https://example.com",
    },
    // Proyectos Móvil
    {
      id: 10,
      image: "/img/Mr_Pastel_app.png",
      category: "second",
      title: "Mr Pastel App",
      description:
        "Aplicación móvil de pastelería para realizar pedidos, ver catálogo y recibir notificaciones de ofertas.",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      github: "https://github.com/James14k/Mr-Pastel",
      website: "https://example.com",
    },
    {
      id: 11,
      image: "/img/levelUp_app.png",
      category: "second",
      title: "LevelUp App",
      description:
        "Aplicación de gamificación para productividad personal con sistema de logros y seguimiento de hábitos.",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/James14k/level-up",
      website: "https://example.com",
    },
  ];

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            Galería
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            Mis Proyectos
          </h1>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul
              className="list-inline mb-4 px-2"
              id="portfolio-flters"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${filter === "*" ? "active" : ""}`}
                onClick={() => setFilter("*")}
              >
                Todos
              </li>
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${filter === "first" ? "active" : ""}`}
                onClick={() => setFilter("first")}
              >
                Web
              </li>
              <li
                className={`btn btn-sm btn-outline-primary m-1 ${filter === "second" ? "active" : ""}`}
                onClick={() => setFilter("second")}
              >
                Móvil
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-12 col-sm-6 col-lg-4 mb-4 portfolio-item ${item.category}`}
            >
              <div
                className="position-relative overflow-hidden mb-2 rounded"
                style={{
                  height: "250px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <img
                  className="w-100 h-100"
                  src={item.image}
                  alt={item.title}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  className="portfolio-btn bg-primary d-flex align-items-center justify-content-center"
                  onClick={() => handleProjectClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className="fa fa-plus text-white"
                    style={{ fontSize: "60px" }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal que creé con enlaces */}
      {selectedProject && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img
                  className="img-fluid rounded mb-4"
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <p className="text-muted mb-3">{selectedProject.description}</p>
                <div className="mb-4">
                  {selectedProject.technologies &&
                    selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge badge-primary mr-2 mb-2 px-3 py-2"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github mr-2"></i>
                    Ver en GitHub
                  </a>
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fa fa-globe mr-2"></i>
                    Ver Sitio Web
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
