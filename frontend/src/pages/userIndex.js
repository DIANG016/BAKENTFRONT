import { Route, Routes } from "react-router-dom";
import { UserPage } from "./userPage";
import { EditUser } from "./EditUser";
import { UserData } from "./UserData";
import { EditPassword } from "../pages/EditPassword";
import { EditImage } from "../components/EditImage";

function UserIndex() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/dataUser" element={<UserData />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/password" element={<EditPassword />} />
        <Route path="/photo" element={<EditImage />} />
      </Routes>
    </section>
  );
}

export default UserIndex;
