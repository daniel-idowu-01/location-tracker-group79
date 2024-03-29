import Map from "../Features/Map";
import SideBar from "../Features/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col-reverse md:flex-row">
      <SideBar />
      <Map />
    </div>
  );
};

export default DashboardLayout;
