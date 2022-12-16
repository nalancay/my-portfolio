import { FormattedMessage } from "react-intl";

export const ItemNavBar = ({ idItemNavbar, href }) => (
  <a className="navbar" href={`#${href}`}>
    <FormattedMessage id={idItemNavbar} />
  </a>
);
