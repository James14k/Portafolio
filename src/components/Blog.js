import React from 'react';
import useTranslation from '../i18n/useTranslation';

const Blog = () => {
  const { t } = useTranslation();
  
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      day: t('blog.posts.1.day'),
      month: t('blog.posts.1.month'),
      title: t('blog.posts.1.title'),
      description: t('blog.posts.1.description'),
      link: 'https://github.com/features/copilot'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      day: t('blog.posts.2.day'),
      month: t('blog.posts.2.month'),
      title: t('blog.posts.2.title'),
      description: t('blog.posts.2.description'),
      link: 'https://spring.io/blog/2024/05/16/spring-boot-3-3-0-available-now'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      day: t('blog.posts.3.day'),
      month: t('blog.posts.3.month'),
      title: t('blog.posts.3.title'),
      description: t('blog.posts.3.description'),
      link: 'https://react.dev/blog/2024/04/25/react-19'
    }
  ];

  return (
    <div className="container-fluid pt-5" id="blog">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6', fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
            {t('blog.bg_title')}
          </h1>
          <h1 className="position-absolute text-uppercase text-primary" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>{t('blog.title')}</h1>
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
                {t('blog.read_more')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
