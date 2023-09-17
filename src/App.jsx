import "./App.css";

import Footer from "./components/Footer";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Chat from "./components/chat/Chat";

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
