import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScrollToBottom, setShowScrollToBottom] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowScrollToBottom(scrollTop <= 100);
      setShowBackToTop(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 45;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      // Si no encuentra la sección about, hace scroll hacia abajo una pantalla
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {showScrollToBottom && (
        <i
          className="fa fa-2x fa-angle-down text-white scroll-to-bottom"
          onClick={scrollToNextSection}
          role="button"
          tabIndex={0}
          aria-label="Scroll hacia abajo"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToNextSection();
            }
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            zIndex: 1000,
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            transition: "transform 0.3s ease",
          }}
        ></i>
      )}
      {showBackToTop && (
        <button
          type="button"
          className="btn btn-outline-dark px-0 back-to-top"
          onClick={() => scrollToTop()}
          aria-label="Volver arriba"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            borderRadius: "50%",
            width: "clamp(40px, 8vw, 45px)",
            height: "clamp(40px, 8vw, 45px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
          }}
        >
          <i className="fa fa-angle-double-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
