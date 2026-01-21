import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Configuré EmailJS - Las credenciales las obtuve de las variables de entorno
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Inicialicé EmailJS
  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setShowSuccess(false);
    setShowError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);
    setErrorMessage('');

    // Validé básicamente
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Por favor completa todos los campos.');
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    // Validé el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor ingresa un email válido.');
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    // Verifiqué que las credenciales de EmailJS estén configuradas
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID === 'YOUR_SERVICE_ID' || 
        TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setErrorMessage('EmailJS no está configurado. Por favor configura las credenciales en el archivo .env');
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    // Envié correo usando EmailJS
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'hawkdurant.jed@gmail.com'
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      let errorMsg = 'Error al enviar el mensaje. ';
      
      if (error.text) {
        errorMsg += error.text;
      } else if (error.message) {
        errorMsg += error.message;
      } else {
        errorMsg += 'Por favor verifica tu configuración de EmailJS o intenta más tarde.';
      }
      
      setErrorMessage(errorMsg);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6', fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
            Contacto
          </h1>
          <h1 className="position-absolute text-uppercase text-primary" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>Contactame</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="contact-form text-center px-3">
              <div id="success">
                {showSuccess && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Tu mensaje ha sido enviado.</strong>
                    <button type="button" className="close" onClick={() => setShowSuccess(false)}>
                      <span>&times;</span>
                    </button>
                  </div>
                )}
                {showError && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{errorMessage || 'Por favor completa todos los campos correctamente.'}</strong>
                    <button type="button" className="close" onClick={() => setShowError(false)}>
                      <span>&times;</span>
                    </button>
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmit} id="contactForm" name="sentMessage" noValidate>
                <div className="form-row">
                  <div className="control-group col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control p-4"
                      name="name"
                      id="name"
                      placeholder="Nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group col-sm-6">
                    <input
                      type="email"
                      className="form-control p-4"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    name="subject"
                    id="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control py-3 px-4"
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button className="btn btn-outline-primary" type="submit" id="sendMessageButton" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

