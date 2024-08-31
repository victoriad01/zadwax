import LinkedInIllustration from "../../assets/svg/linkedin.svg";
import FigmaIllustration from "../../assets/svg/figma.svg";
import AddInIllustration from "../../assets/svg/add.svg";
import LogoIcon from "../../assets/svg/z.svg";

import HomeIcon from "../../assets/svg/home.svg";
import RecentIcon from "../../assets/svg/recent.svg";

import StarredIcon from "../../assets/svg/star.svg";
import ProjectIcon from "../../assets/svg/folder.svg";
import SupportIcon from "../../assets/svg/info.svg";
import SettingIcon from "../../assets/svg/setting.svg";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = ({ setIsSidebarOpen }) => {
  return (
    <div>
      <aside className="w-[301px] bg-white h-screen md:flex">
        <div className="py-4 md:py-0 w-full md:w-[68px] bg-[#5F2ECF] flex justify-center md:flex md:flex-col  items-center md:justify-start gap-6 mdgap-8 md:h-full md:pt-[32px] ">
          <img
            src={LinkedInIllustration}
            alt="Linkedin"
            className="cursor-pointer"
          />
          <img src={FigmaIllustration} alt="Figma" className="cursor-pointer" />
          <img src={FigmaIllustration} alt="Figma" className="cursor-pointer" />
          <img src={AddInIllustration} alt="Add" className="cursor-pointer" />
          <MdOutlineClose
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden h-[32px] w-[32px] text-white rounded-full "
          />
        </div>
        <div className="w-[237px] gap-8 h-full">
          <div className="cursor-pointer pl-8 flex gap-2 items-center mt-8">
            <img src={LogoIcon} alt="" />
            <p className="leading-[24.79px] font-[700] text-[21.56px] ">
              Zadwax
            </p>
          </div>

          <div className=" border-b-2 pb-8 mx-4    ">
            <div className="cursor-pointer px-4 flex gap-2 items-center mt-8">
              <img src={HomeIcon} alt="" />
              <p className="leading-[24.79px]  text-[14px]">Home</p>
            </div>

            <div className="cursor-pointer px-4  flex gap-2 items-center mt-8">
              <img src={RecentIcon} alt="" />
              <p className="leading-[24.79px] text-[14px]  ">Recents</p>
            </div>

            <div className="cursor-pointer px-4  flex gap-2 items-center mt-8">
              <img src={StarredIcon} alt="" />
              <p className="leading-[24.79px]  text-[14px] ">Starred</p>
            </div>
          </div>

          <div className="flex flex-col h-[300px] md:h-[450px] justify-between">
            <div className="cursor-pointer pl-8 flex gap-2 items-center mt-8">
              <img src={ProjectIcon} alt="" />
              <p className="leading-[24.79px]  text-[14px] ">Projects</p>
            </div>

            <div className="flex flex-col">
              <div className="cursor-pointer pl-8 flex gap-2 items-center mt-8">
                <img src={SupportIcon} alt="" />
                <p className="leading-[24.79px]  text-[14px] ">Support</p>
              </div>
              <div className="cursor-pointer pl-8 flex gap-2 items-center mt-8">
                <img src={SettingIcon} alt="" />
                <p className="leading-[24.79px]  text-[14px] ">Settings</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
