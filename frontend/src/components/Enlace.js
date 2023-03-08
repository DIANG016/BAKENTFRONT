import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteLinkService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "./enlace.css";
import { LikeVotes } from "./likeVotes";

export const Enlace = ({ enlace, removeLink }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteLink = async (id) => {
    try {
      await deleteLinkService({ id, token });

      if (removeLink) {
        removeLink(id);
        toast.success("¡Link borrado correctamente!");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="link">
      <h2 className="tituloEnlace">
        <Link className="tituloLink" to={`/enlace/${enlace.id}`}>
          {enlace.titulo}
        </Link>
      </h2>
      <h3 className="enlaceLink">
        <a className="enlaceNewLink" href={enlace.enlace}>
          {enlace.enlace}
        </a>
      </h3>
      {enlace.image ? (
        <figure className="imgNewlinkCon">
          <img
            className="imgNewlink"
            src={`${process.env.REACT_APP_API}/uploads/${enlace.image}`}
            alt={enlace.titulo}
          />
        </figure>
      ) : null}
      <article className="sectionEnlace">
        <h4 className="descripcionNewLink"> Descripción: </h4>
        <p className="pDescripcionNewLink">{enlace.descripcion}</p>
        <p className="linkNewLink">
          {" "}
          Subido por{" "}
          <Link
            className="linkNombreUser"
            to={`/user/${enlace.user_id}/dataUser`}
          >
            {enlace.nombre},
          </Link>
        </p>
        <p>el día {new Date(enlace.created_at).toLocaleString()}</p>

        <p className="votosNewLink">
          {enlace.votosTotales ? (
            <p>Votos al mejor link: {enlace.votosTotales}</p>
          ) : null}
        </p>
        <div>
          <LikeVotes defaultValue={1} id={enlace.id} />
        </div>
      </article>
      {user && user.id === enlace.user_id ? (
        <div>
          <button
            className="buttonEnlace"
            onClick={() => {
              if (window.confirm("¿Estás seguro que quieres borrar el Link?"))
                deleteLink(enlace.id);
            }}
          >
            Borrar Link
          </button>
          {error ? <p className="error">{error}</p> : null}
          {/*  */}
        </div>
      ) : null}
    </section>
  );
};
