import useLinks from "../hooks/useLinks";
import { ErrorMessage } from "./ErrorMessage";
import { ListEnlaces } from "./ListEnlaces";
import Spinner from "./Spinner";

export const UserLinks = ({ id }) => {
  const { enlaces, loading, error, removeLink } = useLinks(id);

  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <ErrorMessage message={error} />;

  return <ListEnlaces enlaces={enlaces} removeLink={removeLink} />;
};
