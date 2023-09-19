import "./App.css";

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
        {/* <Menu /> */}
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
