import "./App.css";
import "../src/utils/css/font.css";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import Homepage from "./pages/homepage/Homepage";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="md:flex bg-[#FCFBFE] min-h-screen">
        <button
          className="md:hidden p-4 text-white bg-[#5F2ECF] w-full flex justify-start
           "
          onClick={toggleSidebar}
        >
          <TfiMenu />
        </button>

        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 md:bg-transparent md:relative md:flex ${
            isSidebarOpen ? "block" : "hidden"
          } md:block`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        <div className="flex-1 w-full  h-screen overflow-y-scroll">
          <div className="top-0 sticky z-30">
            <Navbar />
          </div>

          <div className="pt-[24px] px-4 md:px-8">
            <Homepage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
