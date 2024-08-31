import LinkedInIllustration from "../../assets/svg/linkedin.svg";
import FigmaIllustration from "../../assets/svg/figma.svg";
import AddInIllustration from "../../assets/svg/add.svg";

const Sidebar = () => {
  return (
    <div className="w-[237px] bg-white  h-screen">
      <div className="w-[68px] bg-[#5F2ECF] flex flex-col items-center  gap-8 h-full pt-[32px]">
        <img
          src={LinkedInIllustration}
          alt="Linkedin"
          className="cursor-pointer"
        />
        <img src={FigmaIllustration} alt="Figma" className="cursor-pointer" />
        <img src={FigmaIllustration} alt="Figma" className="cursor-pointer" />
        <img src={AddInIllustration} alt="Add" className="cursor-pointer" />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
