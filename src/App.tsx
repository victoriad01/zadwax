import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full px-16 h-screen overflow-y-scroll">
          <Navbar />
          <div className="pt-[24px] pl-[32px]  ">
            <Homepage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
