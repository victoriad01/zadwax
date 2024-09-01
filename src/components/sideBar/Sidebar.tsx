import { Dispatch, SetStateAction } from "react";
import LeftSide from "./components/leftSide";
import RightSide from "./components/RightSide";

interface SideBarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ setIsSidebarOpen }: SideBarProps) => {
  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <aside className="w-[301px] bg-white h-screen md:flex">
        <LeftSide handleClick={handleClick} />

        <RightSide />
      </aside>
    </div>
  );
};

export default Sidebar;
