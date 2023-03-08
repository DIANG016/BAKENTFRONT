import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendLiknService } from "../services";
import Spinner from "../components/Spinner";
import "./newLink.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const NewLink = ({ addLink }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);
      const enlace = await sendLiknService({ data, token });

      addLink(enlace);

      e.target.reset();
      setImage(null);
      navigate(`/`);
      toast.success("¡Link subido satisfact!");
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    <section className="hola">
      <h2 className="tituloNewLink">Sube un nuevo Link</h2>
      <form className="formContenedor" onSubmit={handleSubmit}>
        <fieldset className="formNewLink">
          <label className="labelNewLink" htmlFor="url">
            Link
          </label>
          <input
            className="imputNewLink"
            type="url"
            name="enlace"
            id="enlace"
          />
          <label className="labelNewLink" htmlFor="text">
            Título
          </label>
          <input
            className="imputNewLink"
            type="text"
            name="titulo"
            id="titulo"
          />
          <label className="labelNewLink" htmlFor="text">
            Descripción
          </label>
          <textarea
            className="textareaNewLink"
            type="textarea"
            name="descripcion"
            id="descripcion"
          />
          <label className="labelNewLinkImage" htmlFor="image">
            {" "}
          </label>
          <div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <div className="divButton">
          <button className="newLinkButton">Enviar Link</button>
        </div>
        {error ? <p className="error">{error}</p> : null}
        {loading ? (
          <p>
            <Spinner />
          </p>
        ) : null}
      </form>
    </section>
    </>
  );
};
