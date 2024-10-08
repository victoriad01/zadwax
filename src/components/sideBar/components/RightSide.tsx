import LogoIcon from "../../../assets/svg/z.svg";
import HomeIcon from "../../../assets/svg/home.svg";
import RecentIcon from "../../../assets/svg/recent.svg";
import StarredIcon from "../../../assets/svg/star.svg";
import ProjectIcon from "../../../assets/svg/folder.svg";
import SupportIcon from "../../../assets/svg/info.svg";
import SettingIcon from "../../../assets/svg/setting.svg";
import { useState } from "react";
import {
  activeStyle,
  sidebarDefaultStyle,
  sidebarParagraphDefaultStyle,
} from "./sibeBarstyles";

const RightSide = () => {
  const [navStyle, setNavStyle] = useState<string>("home");

  const handleNavClick = (navType: string) => {
    setNavStyle(navType);
  };

  return (
    <div className="w-[237px] gap-8 h-full text-gray-700">
      <div className="  pb-8 mx-4 md:h-[248px]  ">
        <div className="cursor-pointer  px-4  flex gap-2 items-center mt-6">
          <img src={LogoIcon} alt="" />
          <p className="leading-[24.79px] font-[700] text-[21.56px] text-logo">
            Zadwax
          </p>
        </div>
        <nav
          className={` mt-8 ${sidebarDefaultStyle}  ${
            navStyle === "home" && activeStyle
          }`}
          onClick={() => handleNavClick("home")}
        >
          <img src={HomeIcon} alt="" />
          <p className={sidebarParagraphDefaultStyle}>Home</p>
        </nav>

        <nav
          className={`${sidebarDefaultStyle}    ${
            navStyle === "recents" && activeStyle
          }`}
          onClick={() => handleNavClick("recents")}
        >
          <img src={RecentIcon} alt="" />
          <p className={sidebarParagraphDefaultStyle}>Recents</p>
        </nav>

        <nav
          className={`${sidebarDefaultStyle}   ${
            navStyle === "starred" && activeStyle
          }`}
          onClick={() => handleNavClick("starred")}
        >
          <img src={StarredIcon} alt="" />
          <p className={sidebarParagraphDefaultStyle}>Starred</p>
        </nav>
        <nav
          className={`${sidebarDefaultStyle}   mt-8  border-t-2  ${
            navStyle === "projects" && activeStyle
          }`}
          onClick={() => handleNavClick("projects")}
        >
          <img src={ProjectIcon} alt="" />
          <p className={sidebarParagraphDefaultStyle}>Projects</p>
        </nav>
      </div>

      <div className="mx-4 flex flex-col h-[calc(100%-480px)] md:h-[calc(100%-300px)] justify-end">
        <div className="flex flex-col gap-2">
          <nav
            className={`${sidebarDefaultStyle}    ${
              navStyle === "support" && activeStyle
            }`}
            onClick={() => handleNavClick("support")}
          >
            <img src={SupportIcon} alt="" />
            <p className={sidebarParagraphDefaultStyle}>Support</p>
          </nav>
          <nav
            className={`${sidebarDefaultStyle}    ${
              navStyle === "settings" && activeStyle
            }`}
            onClick={() => handleNavClick("settings")}
          >
            <img src={SettingIcon} alt="" />
            <p className={sidebarParagraphDefaultStyle}>Settings</p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
