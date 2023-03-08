import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllLinksServices, getUserLinksService } from "../services";

const useLinks = (id) => {
  const [enlaces, setEnlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = id
        ? await getUserLinksService({id, token})
        : await getAllLinksServices(token);
        setEnlaces(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLinks();
  }, [id, token]);

  const addLink = (data) => {
    setEnlaces([data, ...enlaces]);
  };

  const removeLink = (id) => {
    setEnlaces(enlaces.filter((enlace) => enlace.id !== id));
  };
  return { enlaces, loading, error, addLink, removeLink};
};

export default useLinks;
