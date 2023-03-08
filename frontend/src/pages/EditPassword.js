import { useContext, useEffect, useState } from "react";
import { passwordUserService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import "./editPassword.css";

export const EditPassword = () => {
const navigate = useNavigate();
  const { id } = useParams();
  const { token, user } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dato, setDatos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setPassword(user?.password);
    setNewPassword(user?.password);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await passwordUserService({ password, newPassword, token, id });

      setDatos(data);
      setLoading(true);
      navigate(`/user/${id}`);
      toast.success("¡Password cambiada exitosamente!");

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
      <h2 className="tituloEditPassword">Cambiar contraseña</h2>
      <form className="formEditPassword" onSubmit={handleSubmit}>
        <fieldset  className="editFieldEditPassword">
          <label className="labelEditPassword" htmlFor="pass">Contraseña actual</label>
          <input
            className="inputEditPassword"
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="labelEditPassword nuevaContaseña" htmlFor="newPassword">Nueva contraseña</label>
          <input
            className="inputEditPassword"
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </fieldset>
        <div className="divButtonEdit">
          <button className="userButtonPassword">Guardar cambios</button>
        </div>
        {newPassword ? <p>{dato}</p> : null}
        {error ? <p className="error">{error}</p> : null}
        {loading ? <p><Spinner /></p>  : null}
      </form>
    </>
  );
};