import NotificationsIllutration from "../../assets/svg/notification.svg";
import SearchIllutration from "../../assets/svg/search.svg";
import Dp from "../../assets/svg/dp.svg";

const Navbar = () => {
  return (
    <nav className="z-20 relative  h-[72px] flex items-center justify-between sm:justify-end bg-white w-full gap-2 sm:gap-6 lg:gap-20 shadow-sm  px-4 md:px-8">
      <div className="relative">
        <input
          type="text"
          className="flex  min-w-[180px] md:w-[320px]  h-[40px] rounded-md pl-8 pr-4 border-2"
          placeholder={"Search"}
        />
        <div className="absolute top-3 left-3 ">
          <img src={SearchIllutration} alt="notifications" />
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 ">
        <img src={NotificationsIllutration} alt="notifications" />
        <img src={Dp} alt="profile image" />
      </div>
    </nav>
  );
};

export default Navbar;
