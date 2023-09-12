import "./App.css";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <div className="flex">
    <Menu/>
     <Chat/>
    </div>
   
     <Footer/>    
    </>
  );
}

export default App;
