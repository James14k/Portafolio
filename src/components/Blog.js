import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      day: '25',
      month: 'Dic',
      title: 'Inteligencia Artificial en Desarrollo: GitHub Copilot y más',
      description: 'Cómo las herramientas de IA están cambiando la forma en que desarrollamos software, desde GitHub Copilot hasta ChatGPT para código.',
      link: 'https://github.com/features/copilot'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      day: '20',
      month: 'Dic',
      title: 'Spring Boot 3.3: Nuevas características y mejoras',
      description: 'Descubre las últimas actualizaciones de Spring Boot 3.3 y cómo mejoran el desarrollo de aplicaciones Java empresariales.',
      link: 'https://spring.io/blog/2024/05/16/spring-boot-3-3-0-available-now'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      day: '15',
      month: 'Dic',
      title: 'React 19: Las nuevas características que cambiarán el desarrollo frontend',
      description: 'Explorando las nuevas características de React 19 y cómo mejoran el rendimiento y la experiencia del desarrollador.',
      link: 'https://react.dev/blog/2024/04/25/react-19'
    }
  ];

  return (
    <div className="container-fluid pt-5" id="blog">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6', fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
            Blog
          </h1>
          <h1 className="position-absolute text-uppercase text-primary" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>Últimas Entradas</h1>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="position-relative mb-4">
                <img className="img-fluid rounded w-100" src={post.image} alt={post.title} />
                <div className="blog-date">
                  <h4 className="font-weight-bold mb-n1">{post.day}</h4>
                  <small className="text-white text-uppercase">{post.month}</small>
                </div>
              </div>
              <h5 className="font-weight-medium mb-3 px-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>{post.title}</h5>
              {post.description && (
                <p className="px-2 mb-3" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>{post.description}</p>
              )}
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary py-2"
              >
                Leer Más
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

