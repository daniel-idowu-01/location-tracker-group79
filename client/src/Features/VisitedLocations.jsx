import VisitedLocationCard from "./../ui/VisitedLocationCard";

const VisitedLocations = () => (
  <ul className="flex max-h-[280px] w-full flex-col items-center justify-start gap-y-2 overflow-y-auto rounded-md  bg-gray-700 p-4 text-center md:max-h-[500px]">
    {Array.from({ length: 7 }, (_, index) => (
      <VisitedLocationCard key={index} linkId={index + 1} />
    ))}
  </ul>
);

export default VisitedLocations;
