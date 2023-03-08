import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import './auth.css'
//import Avatar from "./Avatar"


export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <section className="contAuth">
     {/*  {user.photo ? (
      <figure className="imageEditFigure">
      <img
        className="imageEdit"
        src={`${process.env.REACT_APP_API}/uploads/${user.photo}`}
        style={{ width: "20px" }}
        alt="Preview"
        />
      </figure>
      ) : <p className="imageEditFigure"><Avatar/></p>} */}
      <Link className="auth" to={`/user/${user.id}`}>{user.nombre}</Link>{" "}
      <Link className="logout" to={"/"}> <IoMdLogOut onClick={() => logout()} /></Link>
    </section>
  ) : (
    <ul className="ulAuth">
      <li>
        <NavLink className="liAuth" to={"/register"}>Registro</NavLink>
      </li>
      <li>
        <NavLink className="liAuth" to={"/login"}>Login</NavLink>
      </li>
    </ul>
  );
};

