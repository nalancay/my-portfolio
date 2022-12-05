import Zoom from "react-reveal/Zoom";

export const About = () => {
  return (
    <section id="about" className="scroll">
      <div className="container_2">
        <Zoom>
          <div className="content_about">
            <h1 className="title_sections">About me</h1>
            <p className="about_p">
              📌 I am a system analyst and frontend developer. 🎨✨{" "}
            </p>
            <p className="about_p">
              📌 Throughout my professional life, I was able to focus and enter
              the world of IT. Lately I've been working as a React.js frontend
              developer.
            </p>
            <p className="about_p">
              📌 I like to continue learning about technologies and frameworks
              for web development. 🌈
            </p>
          </div>
        </Zoom>
      </div>
    </section>
  );
};
