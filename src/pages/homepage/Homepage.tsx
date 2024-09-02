import { Card } from "../../components/card/Card";
import { resources } from "../../data/data";

import FillIllustration from "../../assets/svg/Vector.svg";
import {
  divHTwo,
  sectionDiv,
  sectionParagraph,
  sectionTitle,
  subDivParagraph,
} from "./components/styles";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-firma font-bold align-text-left text-[24px] leading-[32px] text-gray-950">
          Welcome Susan,
        </h1>
        <p className=" font-aeoniklight leading-[24px] text-gray-700 ">
          Get ready to complete your research processes on Zadwax
        </p>
      </div>
      <div className="relative">
        <div className=" p-[24px]  min-h-[169px] bg-[#F0EBFC] rounded-lg">
          <p className="leading-[32px] font-[500] text-[14px]  text-gray-900">
            Welcome to the cool kids club
          </p>
          <p className=" font-aeonik relative z-10 max-w-[920px]  min-h-[64px] text-primary-700 text-[24px] font-[500] leading-[32px]">
            The new way designers revolutionize their work. See how others are
            using Zadwax to accelerate their design process.
          </p>
        </div>
        <img
          src={FillIllustration}
          alt="illustration"
          className="absolute bottom-0 right-0 w-[170px] h-[170px]"
        />
      </div>

      <div className="w-full min-h-286px gap-[24px] xl:flex">
        <div className=" flex flex-col w-full xl:w-[55%] p-[16px] gap-[16px] border-[1px] border-borderRadius rounded-xl mb-10 lg:mb-0">
          <div className="lg:flex items-center justify-between border-b-[1px] pb-[12px] min-h-[62px]">
            <div className="">
              <h2 className={divHTwo}>Get Started</h2>
              <p className={subDivParagraph}>
                Three simple steps to launch your first project
              </p>
            </div>

            <button className="bg-primary rounded-lg text-white px-[12px] py-[8px] text-[14px] gap-[4px]">
              Create project
            </button>
          </div>
          <div className={sectionDiv}>
            <p className={sectionTitle}>Step 1: Create your project</p>
            <p className={sectionParagraph}>
              Give your project a name, add a description and your goals.
            </p>
          </div>
          <div className={sectionDiv}>
            <p className={sectionTitle}>Step 2: Invite your teammates</p>
            <p className={sectionParagraph}>
              Research is better together, Invite your colleagues.
            </p>
          </div>
          <div className={sectionDiv}>
            <p className={sectionTitle}>Step 3: Setup your research process</p>
            <p className={sectionParagraph}>
              Add the processes that are specific to this project.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full xl:w-[45%] p-[16px] gap-[16px] border-[1px] border-borderRadius rounded-xl ">
          <div className="min-h-[62px] flex flex-col border-b-[1px] pb-[12px] ">
            <h2 className={divHTwo}>Research Tips and Tricks</h2>
            <p className={subDivParagraph}>
              Three simple steps to launch your first project
            </p>
          </div>
          <div className={sectionDiv}>
            <p className={sectionTitle}>
              Don’t start from scratch, use a template
            </p>
            <p className={sectionParagraph}>
              Begin with field-tested frameworks adaptable to your research.
            </p>
          </div>
          <div className={sectionDiv}>
            <p className={sectionTitle}>Add steps and set milestones</p>
            <p className={sectionParagraph}>
              Define key stages and monitor progress from hypothesis to
              conclusion.
            </p>
          </div>
          <div className={sectionDiv}>
            <p className={sectionTitle}>
              Track changes in your documents over time.
            </p>
            <p className={sectionParagraph}>
              Capture every revision to ensure data integrity and transparency.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] mb-[24px]">
        <h3 className="text-xl font-[700] leading-[32px] text-gray-950">
          Resources for you
        </h3>
        <div className="grid lg:grid-cols-2 lg:gap-[24px] xl:grid-cols-4 2xl:grid-cols-4">
          {resources.map((resource) => (
            <Card resource={resource} key={resource.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
