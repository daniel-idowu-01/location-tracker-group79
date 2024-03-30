import LocationsProvider from "../contexts/LocationsContext";
import Map from "../Features/Map";
import SideBar from "../Features/SideBar";

const DashboardLayout = () => {
  return (
    <LocationsProvider>
      <div className="flex h-screen w-full flex-col-reverse md:flex-row">
        <SideBar />
        <Map />
      </div>
    </LocationsProvider>
  );
};

export default DashboardLayout;
