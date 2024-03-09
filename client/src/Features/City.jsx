import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { convertToEmoji, formatDate } from "../utils/helper";

/* eslint-disable react/prop-types */
const City = ({ currentCity = {} }) => {
  const navigate = useNavigate();
  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className="max-h-[300px] w-full overflow-y-auto  p-4 md:max-h-full">
      <div className="flex w-full flex-col items-start justify-between rounded-md bg-gray-700 p-4 text-zinc-100">
        {currentCity && (
          <>
            <div className="mb-2 space-y-1 text-left md:mb-3">
              <h1 className="space-x-1 text-base font-semibold">
                <span>Exploring</span>{" "}
                <span>
                  {emoji || convertToEmoji("NG")} {cityName || `Lagos`}
                </span>
              </h1>
              <p className="text-sm">
                Here&apos;s your journey through this amazing city!
              </p>
            </div>

            <div className="my-2 space-y-1  text-left  md:mb-3">
              <h6 className="text-sm text-zinc-300">
                You went to {cityName || `Lekki`} on
              </h6>
              <p className="text-sm font-semibold md:text-base">
                {formatDate(date || Date.now())}
              </p>
            </div>

            {notes ? (
              <div className="my-2 space-y-1 text-left  md:mb-3">
                <h2 className="text-sm text-zinc-300">Your Impressions</h2>
                <p className="text-sm font-semibold md:text-base">{notes}</p>
              </div>
            ) : (
              <div className="my-2 space-y-1 text-left md:mb-3">
                <h2 className="text-sm text-zinc-300">Share Your Experience</h2>
                <p className="text-sm font-semibold md:text-base">
                  What an incredible city! Unfortunately, I didn&apos;t have the
                  chance to take notes this time.
                </p>
              </div>
            )}

            <div className="ml-auto mt-1">
              <Button
                onClick={() => navigate(-1)}
                className=" bg-gray-800 px-3 py-1 text-sm font-semibold hover:bg-gray-900 md:text-base"
              >
                &larr; Back
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default City;
