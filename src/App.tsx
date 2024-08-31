import "./App.css";
import "../src/utils/css/font.css";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <div className="flex bg-[#FCFBFE]">
        <Sidebar />
        <div className="w-full px-8 h-screen overflow-y-scroll">
          <Navbar />
          <div className="pt-[24px] ">
            <Homepage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
