import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import { Link } from 'react-scroll';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Sobre o Portal" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  O povo de Olivêdos mais uma vez tem a oportunidade de vivenciar um momento especial, viver a festa do nosso padroeiro São Sebastião. Todos os anos a comunidade experimenta com fervor a festa do nosso padroeiro, com muitas noites de oração. Esse ano será um pouco diferente, devido a situação pela qual estamos passando, onde não é recomendada a aglomeração de pessoas para não propagar a transmissão da COVID-19.
                </p>
                <p className="about-wrapper__info-text">
                  Como a tecnologia ganhou espaço com a atual situação, este canal foi criado com o intuito de divulgar informações a respeito da festa, comunicados, informações, etc. Com a finalidade de mantermos firmes a nossa fé, vamos juntos vivenciar esse momento bastante especial.
                </p>
                  <p className="hero-cta">
                    <span className="cta-btn cta-btn--resume">
                      <Link to="programacao" smooth duration={1000}>
                        Programação
                      </Link>
                    </span>
                  </p>
                </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
