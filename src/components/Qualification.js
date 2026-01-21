import React from 'react';

const Qualification = () => {
  const education = [
    {
      title: 'BootCamp Full Stack Web Development',
      institution: 'Plataforma de educación online Egg Cooperacion',
      period: '22/03/2023 - 03/10/2023'
    },
    {
      title: 'Duoc Uc institute',
      institution: 'Grado en ingeniería informática',
      period: '06/03/2023 - en progreso'
    },
    {
      title: 'Web Design',
      institution: 'Instituto AIEP(chile)',
      period: '31/10/2022'
    },
    {
      title: 'Bachillerato en Ciencias Humanas',
      institution: 'Colegio Embajador del Rey Ingles',
      period: '2010 - 2018'
    }
  ];

  const experience = [
    {
      position: 'HuertoHogar | Full Stack & Mobile Developer',
      period: '',
      description: '• Desarrollé una tienda online de productos orgánicos migrada a React para optimizar la experiencia de usuario.\n• Diseñé e implementé una arquitectura de microservicios utilizando Spring Boot.\n• Creé la aplicación móvil nativa en Kotlin con Jetpack Compose bajo el patrón MVVM.\n• Aseguré la calidad del código mediante pruebas unitarias con MockK.'
    },
    {
      position: 'EduHub | Backend / Full Stack Developer',
      period: '',
      description: '• Desarrollé una plataforma web educativa utilizando React en el frontend y Java con Spring Boot en el backend.\n• Gestioné la persistencia de datos mediante MySQL.'
    },
    {
      position: 'GymCel | Android Developer',
      period: '',
      description: '• Desarrollé una aplicación móvil para el registro y seguimiento de rutinas de entrenamiento.\n• Implementé la interfaz con Jetpack Compose y la lógica de datos con Retrofit y SQLite bajo arquitectura MVVM.'
    },
    {
      position: 'Empresa de Energía Electrica EDEMSA | Tecnico Electricista',
      period: '05/2018 | 12/2022',
      description: 'Instalación, Diseño y armado de tableros, mantenimiento y reparación de sistemas eléctricos en redes de distribución. Diagnóstico y solución de fallas eléctricas, asegurando el cumplimiento de normas de seguridad. Coordinación con el equipo técnico para optimizar el rendimiento y eficiencia energética etc...'
    }
  ];

  return (
    <div className="container-fluid py-5" id="qualification">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6', fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
            Calidad
          </h1>
          <h1 className="position-absolute text-uppercase text-primary" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>Educación & Experiencias</h1>
        </div>
        <div className="row align-items-start">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <h3 className="mb-4 text-center text-lg-left">Formación académica</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {education.map((edu, index) => (
                <div key={index} className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
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
            <h3 className="mb-4 text-center text-lg-left">Proyectos Personales</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {experience.map((exp, index) => (
                <div key={index} className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">{exp.position}</h5>
                  {exp.period && (
                    <p>
                      <small>{exp.period}</small>
                    </p>
                  )}
                  <p className="mb-2" style={{ whiteSpace: 'pre-line' }}>
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

