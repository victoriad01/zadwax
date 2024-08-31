import React from "react";

const Homepage = () => {
  // styleName: Display xs/Bold; font-family: var(--TypefaceFamilyDisplay);
  //  font-size: var(--TypefaceSizeDisplayxs); line-height: 32px; //styleName: Display xs/Bold;
  // font-family: var(--TypefaceFamilyDisplay);
  // font-size: var(--TypefaceSizeDisplayxs);
  // font-weight: 400;
  // line-height: 32px;
  // text-align: left;

  return (
    <div>
      <div className="mb-4">
        <p className=" font-bold align-text-left text-[400] leading-[32px]">
          Welcome Susan,
        </p>
        <p className="text-[16px] ">
          Get ready to complete your research processes on Zadwax
        </p>
      </div>

      <div className="p-[24px]  h-[169px] bg-primary-50 mt-4 rounded-lg">
        <p>Welcome to the cool kids club</p>
        <p>
          The new way designers revolutionize their work. See how others are
          using Zadwax to accelerate their design process.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
