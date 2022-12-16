import { getContactList } from "constants/ContactList.constants";
import { FormattedMessage } from "react-intl";
import Zoom from "react-reveal/Zoom";

function ItemContact({ name, href, pathImg }) {
  return (
    <a className="social" href={href} target="_blank" rel="noreferrer">
      <img src={pathImg} alt={`${name} icon`} />
    </a>
  );
}

export const Contact = () => {
  return (
    <footer id="contact">
      <div className="container_5">
        <Zoom>
          <div className="content_title">
            <h1 className="title_footer">
              <FormattedMessage id="app.title.contact" />
            </h1>
            <img src="img/send.svg" alt="Send me icon" />
          </div>
          <p className="mail">alancaynatalia@gmail.com</p>
          <div className="contact">
            {getContactList().map((itemContact, index) => {
              return (
                <ItemContact
                  key={index}
                  name={itemContact.name}
                  href={itemContact.href}
                  pathImg={itemContact.pathImg}
                />
              );
            })}
          </div>
        </Zoom>
        <div className="arrow_up" id="arrow_up">
          <a href="#body" className="button_up">
            <img src="img/arrow-up.svg" alt="arrow up" className="img_arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
};
