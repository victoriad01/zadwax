import NotificationsIllutration from "../../assets/svg/notification.svg";
import Dp from "../../assets/svg/dp.svg";

const Navbar = () => {
  return (
    <div className="h-[72px] flex items-center justify-end   w-full gap-20 shadow-sm top-0 sticky bg-white">
      <input
        type="text"
        className="flex w-[320px] gap-8 h-[40px] rounded-md px-4 border-2"
        placeholder={"Search"}
      />
      {/* <img src={SearchIllutration} alt="Search icon" /> */}
      <div className="flex gap-6">
        <img src={NotificationsIllutration} alt="notifications" />
        <img src={Dp} alt="profile image" />
      </div>
    </div>
  );
};

export default Navbar;
