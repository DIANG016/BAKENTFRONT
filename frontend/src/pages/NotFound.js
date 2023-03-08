import './notFound.css'

//import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
      <section>
        <h1 className='notFound'>Not Found :(</h1>
        <Link className='notFoundLink' to={"/"} >Volver a la página de inicio</Link>
      </section>
    );
  };
