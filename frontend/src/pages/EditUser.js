import { useState, useContext, useEffect } from "react";
import { editUserService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import "./editUser.css";

export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token, user } = useContext(AuthContext);

  const [logedUser, setLogedUser] = useState(user);
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [biography, setBiography] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  useEffect(() => {
    setNombre(user?.nombre);
    setEmail(user?.email);
    setBiography(user?.biography);
  
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      setLoading(true);
      if (!(nombre || email || biography)) {
        toast.warn("No has introducido ningún dato nuevo");
        return;
      }
      const formData = new FormData();

      formData.append("nombre", nombre);
      formData.append("email", email);
      formData.append("biography", biography);
      

    await editUserService({ id, formData, token });

  

      setLogedUser({
        ...logedUser,
        nombre,
        email,
        biography
      });

      // setPhoto(null);
      navigate(`/user/${id}`);
      toast.success("¡Cambios realizados correctamente!");
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
      <h2 className="tituloEditusuario">Actualizar datos</h2>
      <form className="formEditUser" onSubmit={handleSubmit}>
        <fieldset className="editFieldUser">
          <label className="labelEditUser" htmlFor="text">
            {" "}
            Nombre{" "}
          </label>
          <input
            className="inputEdit"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label className="emailEdit" htmlFor="text">
            Correo electrónico
          </label>
          <input
            className="inputEdit"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labelEditUser" htmlFor="text"></label>
          <span>Biografía</span>
          <textarea
            className="textareaEditUser"
            name="biography"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
        </fieldset>
        <div className="divButtonEdit">
          <button className="userButton">Guardar cambios</button>
        </div>
        {error ? <p className="errorEdit">{error}</p> : null}
        {loading ? (
          <p>
            <Spinner />
          </p>
        ) : null}
      </form>
    </>
  );
};
