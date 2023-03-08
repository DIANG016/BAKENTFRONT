import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import './Header.css'
import Theme from "./Theme";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"} className ="titleHeader">ShareLink</Link>
      </h1>
      <Theme />
      <nav>
        <Auth />
      </nav>
    </header>
  );
};