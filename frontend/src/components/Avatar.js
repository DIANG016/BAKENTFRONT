import defaultAvatar from "../asset/defaultAvatar.jpg";
import "./avatar.css";

const Avatar = () => {
  return <img className="avatar" src={defaultAvatar} alt="Avatar usuario" />;
};

export default Avatar;
