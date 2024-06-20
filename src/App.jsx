import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
