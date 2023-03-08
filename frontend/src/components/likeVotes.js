import { useContext, useState } from "react";
import { sendLikeVotes } from "../services";
import { AuthContext } from "../context/AuthContext";
import "./likeVotes.css";


export const LikeVotes = ({defaultValue, id}) => {
    const [active, setActive] = useState(true);
    const { token } = useContext(AuthContext);
    const [vote, setVote] = useState(defaultValue);
    const[dato, setDatos] =useState("");
    const [error, setError] = useState("");
  
    const handlePlus = async (e) => {
      e.preventDefault();
      setError("");
      try {
       const data = await sendLikeVotes({ vote, token, id });
       setVote( vote) 
       setDatos(data)
       setActive(!active)
       setTimeout(()=>{
        setDatos(null)
      }, 5000)
    
    
      } catch (error) {
        setError(error.message);
        setTimeout(()=>{
          setError(null)
        }, 5000)
       
      }
    }; 
    return (
        <>

        <span 
      onClick={handlePlus}
    >
      {active ? "♡" : "♥" }
    </span>
        {vote ? <p className="datoVote">{dato}</p> : null}
        {error ? <p className="error">{error}</p> : null}
        </>
    );
}

