import LinkedInIllustration from "../../../assets/svg/linkedin.svg";
import FigmaIllustration from "../../../assets/svg/figma.svg";
import AddInIllustration from "../../../assets/svg/add.svg";
import { MdOutlineClose } from "react-icons/md";

interface LeftSideProps {
  handleClick: () => void;
}

const LeftSide = ({ handleClick }: LeftSideProps) => {
  return (
    <div className="py-4 md:py-0 w-full md:w-[68px] bg-[#5F2ECF] flex justify-center md:flex md:flex-col  items-center md:justify-start gap-4 sm:gap-6 md:gap-8 md:h-full md:pt-[16px] ">
      <img
        src={LinkedInIllustration}
        alt="Linkedin"
        className="cursor-pointer"
      />
      <img src={FigmaIllustration} alt="Figma" className="cursor-pointer" />
      <img src={FigmaIllustration} alt="Figma" className="cursor-pointer" />
      <img src={AddInIllustration} alt="Add" className="cursor-pointer" />
      <MdOutlineClose
        onClick={handleClick}
        className="md:hidden h-[32px] w-[32px] text-white rounded-full "
      />
    </div>
  );
};

export default LeftSide;
