import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import Zoom from "react-reveal/Zoom";
import { ItemNavBar } from "./ItemNavbar";
import { LangContext } from "context/langContext";

const RenderSvgPlant = ({ className }) => (
  <div className={className}>
    <lottie-player
      src="https://assets2.lottiefiles.com/packages/lf20_8gjphoi9.json"
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "350px" }}
      loop
      autoplay
      className="svg_plant"
    />
  </div>
);

export default function Header() {
  const toggleMenu = () => {
    let siteNav = document.getElementById("site-nav");
    siteNav.classList.toggle("nav_open");
  };
  const lang = useContext(LangContext);

  return (
    <header className="header">
      <nav>
        <div className="flag">
          <button onClick={() => lang.setLang("es-ES")}>
            <img src={"img/spain.png"} alt="Logo" />
          </button>
          <button onClick={() => lang.setLang("en-US")}>
            <img src={"img/united.png"} alt="Logo" />
          </button>
        </div>
        <div className="nav-buttons">
          <div>
            <button
              className="ham"
              type="button"
              onClick={toggleMenu}
              id="btn-menu"
            >
              <img src="img/menu.svg" alt="hamburguer icon" />
            </button>
          </div>
          <div className="site-nav" id="site-nav">
            <ItemNavBar idItemNavbar="navbar.home" href="home" />
            <ItemNavBar idItemNavbar="navbar.about" href="about" />
            <ItemNavBar idItemNavbar="navbar.projects" href="projects" />
            <ItemNavBar idItemNavbar="navbar.skills" href="skills" />
            <ItemNavBar idItemNavbar="navbar.contact" href="contact" />
          </div>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="container">
          <Zoom>
            <div />
            <div className="content_home">
              <h1 className="title_1">
                <FormattedMessage id="app.title_1" />
              </h1>
              <h2 className="title_2">
                <FormattedMessage
                  id="app.title_2"
                  values={{ name: "Natalia Alancay" }}
                />
              </h2>
              <p className="description">
                <FormattedMessage id="app.description" />
              </p>
              <div className="social_media">
                <a
                  href="https://www.linkedin.com/in/natalia-alancay-454747b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social_img"
                    src="img/linkedin.svg"
                    alt="icon-linkedin"
                  />
                </a>
                <a
                  href="https://github.com/nalancay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social_img"
                    src="img/github.svg"
                    alt="icon-github"
                  />
                </a>
              </div>
            </div>
            <RenderSvgPlant className="content_img" />
          </Zoom>
        </div>
      </section>
    </header>
  );
}
