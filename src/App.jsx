import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { Loading } from "./components/Loading";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer />
    </>
  );
};

export default App
