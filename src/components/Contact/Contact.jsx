import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {

  return (
    <section id="contact">
      <Container>
        <Title title="Contribua" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Caso deseje contribuir com a nossa festa entre em contato conosco
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={'https://wa.me/message/AA64LCB7GTYGM1'}
            >
              Entrar em contato
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
