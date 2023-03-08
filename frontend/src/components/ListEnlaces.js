import { Enlace } from "./Enlace";
import "../pages/userPage";
import "./listEnlaces.css"


export const ListEnlaces = ({ enlaces, removeLink }) => {
  return enlaces.length ? (
    <ul className="link-list">
    {enlaces.map((enlace) => {
      return (
        <li key={enlace.id}>
          <Enlace enlace={enlace} removeLink={removeLink} />
        </li>
      );
    })}
  </ul>
) : (
    <p className="pListEnlace">No has subido ningún link...</p>
  );
};