import React, { useState } from "react";
import useTranslation from "../i18n/useTranslation";

const Certificates = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      image:
        "/img/certificates/Captura de pantalla 2026-01-21 a la(s) 20.07.32.png",
      title: t("certificates.1.title"),
      institution: t("certificates.1.institution"),
      date: t("certificates.1.date"),
      credential: "https://todocodeacademy.com/certificate/bg9/",
    },
    {
      id: 2,
      image:
        "/img/certificates/Captura de pantalla 2026-01-21 a la(s) 20.07.57.png",
      title: t("certificates.2.title"),
      institution: t("certificates.2.institution"),
      date: t("certificates.2.date"),
      credential: "https://todocodeacademy.com/certificate/spring-boot-ksw/",
    },
    {
      id: 3,
      image:
        "/img/certificates/Captura de pantalla 2026-01-21 a la(s) 20.09.15.png",
      title: t("certificates.3.title"),
      institution: t("certificates.3.institution"),
      date: t("certificates.3.date"),
      credential: "https://todocodeacademy.com/certificate/jjv/",
    },
    {
      id: 4,
      image:
        "/img/certificates/Captura de pantalla 2026-01-21 a la(s) 20.09.34.png",
      title: t("certificates.4.title"),
      institution: t("certificates.4.institution"),
      date: t("certificates.4.date"),
      credential: "https://todocodeacademy.com/certificate/czk/",
    },
    {
      id: 5,
      image:
        "/img/certificates/Captura de pantalla 2026-01-21 a la(s) 20.10.13.png",
      title: t("certificates.5.title"),
      institution: t("certificates.5.institution"),
      date: t("certificates.5.date"),
      credential: "https://todocodeacademy.com/certificate/khe/",
    },
    {
      id: 6,
      image: "/img/certificates/aiep1.png",
      title: t("certificates.6.title"),
      institution: t("certificates.6.institution"),
      date: t("certificates.6.date"),
      credential: "",
    },
    {
      id: 7,
      image: "/img/certificates/aiep2.png",
      title: t("certificates.7.title"),
      institution: t("certificates.7.institution"),
      date: t("certificates.7.date"),
      credential: "",
    },
    {
      id: 8,
      image:
        "https://production-egg-certificates.s3.amazonaws.com/HawkDurant/programacióncooperativa2/thumbnail_3cc3474aad9692f8ccc3c6f9c854c56b6eacdd7c7fdd4e05d034ceaf1242ea51.jpeg",
      title: t("certificates.8.title"),
      institution: t("certificates.8.institution"),
      date: t("certificates.8.date"),
      credential:
        "https://production-egg-certificates.s3.amazonaws.com/HawkDurant/programacióncooperativa2/thumbnail_3cc3474aad9692f8ccc3c6f9c854c56b6eacdd7c7fdd4e05d034ceaf1242ea51.jpeg",
    },
    {
      id: 9,
      image: "/img/certificates/cestificado_modulo.jpeg",
      title: t("certificates.9.title"),
      institution: t("certificates.9.institution"),
      date: t("certificates.9.date"),
      credential: "",
    },
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="container-fluid pt-5 pb-3" id="certificates">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            {t("certificates.bg_title")}
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            {t("certificates.title")}
          </h1>
        </div>
        <div className="row">
          {certificates.map((cert) => (
            <div key={cert.id} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div
                className="position-relative overflow-hidden rounded"
                style={{
                  height: "220px",
                  backgroundColor: "#f8f9fa",
                  cursor: "pointer",
                }}
                onClick={() => handleCertificateClick(cert)}
              >
                <img
                  className="w-100 h-100"
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x220?text=Certificado";
                  }}
                />
                <div
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                  style={{
                    top: 0,
                    left: 0,
                    background: "rgba(0, 168, 150, 0.9)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <h5 className="text-white text-center px-3 mb-2">
                    {cert.title}
                  </h5>
                  <p className="text-white mb-0">{cert.institution}</p>
                  <small className="text-white-50">{cert.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver certificado */}
      {selectedCertificate && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCertificate.title}</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img
                  className="img-fluid rounded mb-3"
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Certificado";
                  }}
                />
                <p className="mb-1">
                  <strong>{t("certificates.institution_label")}:</strong>{" "}
                  {selectedCertificate.institution}
                </p>
                <p className="mb-3">
                  <strong>{t("certificates.date_label")}:</strong> {selectedCertificate.date}
                </p>
                {selectedCertificate.credential && (
                  <a
                    href={selectedCertificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fa fa-external-link-alt mr-2"></i>
                    {t("certificates.view_credential")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
