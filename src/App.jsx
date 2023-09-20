import "./App.css";
import PrivateRoute from "./Route/PrivateRoute";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Chat from "./components/chat/Chat";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* <PrivateRoute> <Menu /></PrivateRoute>   */}
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
