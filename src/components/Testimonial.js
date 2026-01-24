import React, { useEffect, useRef } from "react";

const Testimonial = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initCarousel = () => {
      if (carouselRef.current && window.$ && window.$.fn.owlCarousel) {
        window.$(carouselRef.current).owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          loop: true,
          items: 1,
        });
      }
    };

    // Esperé a que jQuery y Owl Carousel estén disponibles
    if (window.$ && window.$.fn.owlCarousel) {
      initCarousel();
    } else {
      const checkInterval = setInterval(() => {
        if (window.$ && window.$.fn.owlCarousel) {
          initCarousel();
          clearInterval(checkInterval);
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }
  }, []);

  const { t } = useTranslation();
  const testimonials = [
    {
      text: t("testimonial.1.text"),
      name: t("testimonial.1.name"),
      profession: t("testimonial.1.profession"),
    },
    {
      text: t("testimonial.2.text"),
      name: t("testimonial.2.name"),
      profession: t("testimonial.2.profession"),
    },
    {
      text: t("testimonial.3.text"),
      name: t("testimonial.3.name"),
      profession: t("testimonial.3.profession"),
    },
  ];

  return (
    <div className="container-fluid py-5" id="testimonial">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{
              WebkitTextStroke: "1px #dee2e6",
              fontSize: "clamp(3rem, 10vw, 10rem)",
            }}
          >
            {t("testimonial.bg_title")}
          </h1>
          <h1
            className="position-absolute text-uppercase text-primary px-2"
            style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}
          >
            {t("testimonial.title")}
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="owl-carousel testimonial-carousel"
              ref={carouselRef}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center px-3">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4
                    className="font-weight-light mb-4"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                  >
                    {testimonial.text}
                  </h4>
                  <img
                    className="img-fluid rounded-circle mx-auto mb-3"
                    src="/img/profile.png"
                    alt={testimonial.name}
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5 className="font-weight-bold m-0">{testimonial.name}</h5>
                  <span>{testimonial.profession}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
