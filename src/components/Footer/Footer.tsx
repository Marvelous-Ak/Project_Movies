import "./Footer.css";
import Footer1 from "../../assets/img/Footer.png";
import FooterLogo1 from "../../assets/img/Icons Footer/Best.png";
import FooterLogo2 from "../../assets/img/Icons Footer/Logo GPTW.png";
import FooterLogo3 from "../../assets/img/Icons Footer/Vector EFY.png";
import FooterLogo4 from "../../assets/img/Icons Footer/Vector AWS.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <img className="footer-image" src={Footer1} alt="Footer Image" />

          <div className="footer-logos">
            <h1 className="fw-bold">We are coding the world of tomorrow_</h1>
            <p>
              <br />
              DaCodes es una de las mejores empresas de desarrollo de software
              en México y LATAM. Lo que nos separa de los demás es el nivel de
              involucramiento que tenemos en nuestros proyectos y la pasión que
              tenemos por desarrollar productos digitales de calidad mundial.
              Somos un equipo de 220+ dacoders especializados en la planeación,
              diseño, desarrollo, implementación e innovación continua de
              productos digitales disruptivos.
              
            </p>
            <br /><br />
            {/*Logos*/}
            <img className="logoF" src={FooterLogo1} alt="Footer Logos"/>
            <img className="logoF" src={FooterLogo2} alt="Footer Logos"/>
            <img className="logoF" src={FooterLogo3} alt="Footer Logos"/>
            <img className="logoF" src={FooterLogo4} alt="Footer Logos"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
