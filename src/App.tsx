import { Layout } from "./_layout";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full px-16">
          <Navbar />
          <div className="pt-[24px] pr-[40px] pl-[32px] ">
            <Homepage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
