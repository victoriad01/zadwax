import NotificationsIllutration from "../../assets/svg/notification.svg";
import Dp from "../../assets/svg/dp.svg";

const Navbar = () => {
  return (
    <nav className="z-20 relative  h-[72px] flex items-center justify-center sm:justify-end bg-white w-full gap-2 sm:gap-10 md:gap-20 shadow-sm  px-4 md:px-8">
      <input
        type="text"
        className="flex  w-[180px] md:w-[320px]  h-[40px] rounded-md px-4 border-2"
        placeholder={"Search"}
      />

      <div className="flex gap-4 md:gap-6 ">
        <img src={NotificationsIllutration} alt="notifications" />
        <img src={Dp} alt="profile image" />
      </div>
    </nav>
  );
};

export default Navbar;
