import './APP.css';
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Home } from './pages/Home';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { EnlacePages } from "./pages/EnlacePage";
import { NotFound } from "./pages/NotFound";
import  UserIndex  from './pages/userIndex';
import { useTheme } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NewLink } from './pages/NewLink';
import useLinks from "./hooks/useLinks";

function App() {
  const theme = useTheme();
  const {addLink} = useLinks();

  return (
    <>
      <Header />
      <main className={`main ${theme}`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enlace" element={<NewLink addLink={addLink} />} />
          <Route path="/enlace/:id" element={<EnlacePages />} />
          <Route path="/user/:id/*" element={<UserIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
    </>
  );
}

export default App;

