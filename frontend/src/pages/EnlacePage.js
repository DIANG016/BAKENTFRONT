import { useParams } from "react-router-dom";
import useLink from "../hooks/useLink";
import { ErrorMessage } from "../components/ErrorMessage";
import { Enlace } from "../components/Enlace";
import './EnlacePage.css';
import Spinner from "../components/Spinner";



export const EnlacePages = () => {
  const { id } = useParams(); 
  const { enlace, error, loading } = useLink(id);
  

  if (loading) return <p><Spinner /></p>
  if (error) return <ErrorMessage message={error} />;
  
    return (
      <section>
        <h2 className="titleEnlacePages">Link by {enlace.email}</h2>  
        <article className="articleEnlacePages">
          <Enlace enlace={enlace} />
        </article>
      </section>
    );
  };
