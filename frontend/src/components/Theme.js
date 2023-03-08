import { useTheme, useSetTheme } from "../context/ThemeContext";
import '../APP.css';
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const Theme = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const handleClick = () => {
    setTheme(theme === "day" ? "nigth" : "day");
  };

  return <span className="modoNocturno" onClick={handleClick}>{theme === "day" ? <BsMoon className="modoNocturnoMoon"/> : <BsSun className="modoNocturnoSun"/>}</span> ;
};

export default Theme;
