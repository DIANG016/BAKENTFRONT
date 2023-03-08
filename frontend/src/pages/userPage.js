import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserLinks } from "../components/UserLinks";
import useUser from "../hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import Spinner from "../components/Spinner";
import "./userPage.css";
import Avatar from "../components/Avatar";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  const navigate = useNavigate();

  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section className="fotoUserCamareP">
          <figure className="fotoUser">
            {user.photo ? (
              <img
                className="imagenUserPage"
                src={`${process.env.REACT_APP_API}/uploads/${user.photo}`}
                alt={user.id}
                style={{ width: "80px" }}
              />
            ) : (
              <p className="">
                <Avatar />
              </p>
            )}
          </figure>
          <div
            className="buttonCamare"
            onClick={() => {
              navigate(`/user/${id}/photo`);
            }}
          >
            <button className="buttonCamara">
              {" "}
              <AiOutlineCamera />{" "}
            </button>
          </div>
      </section>
      <section className="userSection">
        <h2 className="userTitle">Hola {user.nombre}</h2>

        <p>
          <FaUserAlt className="userUser" /> {user.id}
        </p>
        <p>
          <MdMarkEmailRead /> {user.email}
        </p>
        <p>
          <BsFillCalendarCheckFill className="userRegister" />{" "}
          {new Date(user.created_at).toLocaleString()}{" "}
        </p>
        {user.biography ? (
          <p>
            <HiDocumentText /> {user.biography}
          </p>
        ) : null}
        <span
          onClick={() => {
            navigate(`/user/${id}/password`);
          }}
        >
          <button className="buttonUserPage">
            {" "}
            <FiEdit3 /> Cambiar Password
          </button>
        </span>
        <span
          onClick={() => {
            navigate(`/user/${id}/editUser/${user.id}`);
          }}
        >
          <button className="buttonUserPage">
            {" "}
            <FiEdit3 /> Editar usuario
          </button>
        </span>
        <span
          onClick={() => {
            navigate(`/enlace`);
          }}
        >
          <button className="buttonUserPage">
            {" "}
            <BiLink /> Nuevo link
          </button>
        </span>
      </section>
      <article>
        <UserLinks id={user.id} />
      </article>
    </>
  );
};
