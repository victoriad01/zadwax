import Sidebar from "./components/sideBar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <div>Navbar</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
