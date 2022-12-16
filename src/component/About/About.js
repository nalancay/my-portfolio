import { FormattedMessage } from "react-intl";
import Zoom from "react-reveal/Zoom";

const WordComponent = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <p className="about_p">
          <FormattedMessage id={`app.about.p${index}`} />
        </p>
      ))}
    </>
  );
};

export const About = () => {
  return (
    <section id="about" className="scroll">
      <div className="container_2">
        <Zoom>
          <div className="content_about">
            <h1 className="title_sections">
              <FormattedMessage id="navbar.about" />
            </h1>
            <WordComponent />
          </div>
        </Zoom>
      </div>
    </section>
  );
};
