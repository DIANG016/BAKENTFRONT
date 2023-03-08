import { ListEnlaces } from "../components/ListEnlaces";
import useLinks from "../hooks/useLinks";
import { ErrorMessage } from "../components/ErrorMessage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import "./home.css";
import image3 from "../imageHome/image3.png";
import image2 from "../imageHome/image2.png";
import image1 from "../imageHome/image1.png";
import image from "../imageHome/image.png";
import Avatar from "../components/Avatar";


export const Home = () => {
  const { enlaces, loading, error, removeLink} = useLinks();
  const { user } = useContext(AuthContext);
  console.log(user);

  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? (
        <>
          <section className="barraSubeLink">

          {user.photo ? (
        <figure  className="fotoHome">
          <img
        className="imagenHomeUser"
            src={`${process.env.REACT_APP_API}/uploads/${user.photo}`}
            //src={URL.createObjectURL(photo)}
            style={{ width: "80px" }}
            alt="Preview"
          />
        </figure>
      ) : <p className="imageEditFigure"><Avatar/></p>}
            

         

            
            <Link className="linkSubeLink" to={`/enlace`}>
              Sube un nuevo link
            </Link>
          </section>

          <h2 className="tituloHomeLogeado">Últimos links</h2>

          <ListEnlaces enlaces={enlaces} removeLink={removeLink} />
        </>
      ) : (
        <>
          <h2 className="homeTitulo">ShareLinks</h2>
          <section className="contenedorHome">
            <div>
              <figure className="figureHome">
                <img className="move" src={image3} alt="teléfono" />
              </figure>
              <figure className="figureHome">
                <img className="move1" src={image2} alt="teléfono" />
              </figure>
              <figure className="figureHome">
                <img className="move2" src={image1} alt="teléfono" />
              </figure>
              <figure className="figureHome">
                <img className="move3" src={image} alt="teléfono" />
              </figure>
            </div>
            <div className="contenedorHomeLink">
              <h3 className="homeSubTitulo1">Comparte tus link</h3>
              <p className="homep letraHomeLink">https://www.instagram.com/</p>
              <p className="homep1 letraHomeLink">https://www.facebook.com/</p>
              <p className="homep2 letraHomeLink">https://www.youtube.com/</p>
              <p className="homep3 letraHomeLink">https://twitter.com/</p>
            </div>
          </section>
        </>
      )}
    </section>
  );
};
