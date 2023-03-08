import { useEffect, useState, useContext } from "react";
import { getSingleLinkService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useLink = (id) => {
    const [enlace, setEnlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { token } = useContext(AuthContext);
  
    useEffect(() => {
      const loadEnlace = async () => {
        try {
          setLoading(true);
          const data = await getSingleLinkService({id, token});
  
          setEnlace(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      loadEnlace();
    }, [id, token]);
  
    return { enlace, loading, error };
  };
  
  export default useLink;
  