import NotificationsIllutration from "../../assets/svg/notification.svg";
import Dp from "../../assets/svg/dp.svg";

const Navbar = () => {
  return (
    <nav className="  h-[72px] flex items-center sm:justify-end bg-white w-full gap-20 shadow-sm  px-4 md:px-8">
      <input
        type="text"
        className="flex max-w-[320px] gap-8 h-[40px] rounded-md px-4 border-2"
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
