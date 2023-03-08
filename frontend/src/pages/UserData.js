import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserLinks } from "../components/UserLinks";
import useUser from "../hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import Spinner from "../components/Spinner";
import "./userData.css"



export const UserData = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  //const navigate = useNavigate();
 
  if (loading) return <p><Spinner /></p>
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section className="userDataSection">
        <h2 className="userDataTitle"> {user.nombre}</h2>
        <p>
          <FaUserAlt /> {user.id}
        </p>
        <p className="userDataEmail">
          <MdMarkEmailRead /> {user.email}
        </p>
        <p className="userDataRegister">
          <BsFillCalendarCheckFill  />{" "}
          {new Date(user.created_at).toLocaleString()}{" "}
        </p>
        {user.biography ? (
          <p className="userDataBiography">
            <HiDocumentText /> {user.biography}
          </p>
        ) : null}
      </section>
      <article>
        <UserLinks id={user.id} /> 
      </article>    
    </>
  );
};
