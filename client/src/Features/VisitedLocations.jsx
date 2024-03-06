import VisitedLocationCard from "./../ui/VisitedLocationCard";

const VisitedLocations = () => (
  <ul className="flex max-h-[220px] w-full flex-col items-center justify-start gap-y-2 overflow-y-auto p-4 md:max-h-[500px]  lg:max-h-[550px]">
    {Array.from({ length: 3 }, (_, index) => (
      <VisitedLocationCard key={index} linkId={index + 1} />
    ))}
  </ul>
);

export default VisitedLocations;
