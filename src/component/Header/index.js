import { useEffect } from "react";

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

  return (
    <header className="header">
      <nav>
        <div className="nav-buttons">
          <button
            className="ham"
            type="button"
            onClick={toggleMenu}
            id="btn-menu"
          >
            <img src="img/menu.svg" alt="hamburguer icon" />
          </button>
          <div className="site-nav" id="site-nav">
            <a className="navbar" href="#home">
              Home
            </a>
            <a className="navbar" href="#about">
              About me
            </a>
            <a className="navbar" href="#skills">
              Skills
            </a>
            <a className="navbar" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="container">
          <RenderSvgPlant className="content_img__one" />
          <div className="content_home">
            <h1 className="title_1">Hello world!</h1>
            <h2 className="title_2">I´m Natalia Alancay</h2>
            <p className="description">Frontend developer</p>
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
                href="https://github.com/Natalia2612"
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
        </div>
      </section>
    </header>
  );
}
