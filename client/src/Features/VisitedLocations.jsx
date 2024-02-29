import VisitedLocationCard from "./../ui/VisitedLocationCard";

const VisitedLocations = () => {
  return (
    <ul className="flex max-h-[220px] w-full flex-col items-center justify-start gap-y-2 overflow-y-auto p-4 md:max-h-[500px]  lg:max-h-[550px]">
      <VisitedLocationCard />
      <VisitedLocationCard />
      <VisitedLocationCard />
    </ul>
  );
};

export default VisitedLocations;
