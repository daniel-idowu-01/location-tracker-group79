import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../ui/Button";
import { useReverseGeoCoding } from "../hooks/useReverseGeoCoding";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
// import Input from "../ui/Input";

const AddLocation = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [lat, lng] = useUrlPosition();
  const {
    isLoadingGeocoding,
    cityName,
    country,
    emoji,
    geocodingError,
    countryCode,
    principality,
  } = useReverseGeoCoding();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      note,
      countryCode,
      principality,
      position: { lat, lng },
    };
    console.log(newCity);
    navigate("/dashboard/locations");
  };

  if (!lat && !lng) {
    return (
      <div className="p-4">
        <div className="flex min-h-[250px] w-full items-center justify-center rounded-md bg-gray-700 p-4 text-center text-zinc-100">
          Start by clicking somewhere on the map
        </div>
      </div>
    );
  }

  if (isLoadingGeocoding) {
    return (
      <div className="p-4">
        <div className="flex min-h-[250px] w-full items-center justify-center rounded-md bg-gray-700 p-4 text-center text-zinc-100">
          Loading...
        </div>
      </div>
    );
  }

  if (geocodingError) {
    return (
      <div className="p-4">
        <div className="flex min-h-[250px] w-full items-center justify-center rounded-md bg-gray-700 p-4 text-center text-zinc-100">
          <span>{geocodingError}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-start overflow-y-auto bg-gray-800 p-4">
      <h1 className="my-0 mb-2 text-zinc-100">Add Location Details</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex w-full flex-col items-start justify-between gap-y-4 rounded-md bg-gray-700 p-3 text-sm font-medium text-zinc-100"
      >
        <div className="relative w-full space-y-[2px]">
          <label htmlFor="city">City Name</label>
          {/* <input
            type="text"
            id="city"
            disabled={true}
            className="h-8 w-full rounded-sm bg-gray-300 text-zinc-700 focus:border-none"
            // value={cityName}
          /> */}
          <div className="flex h-8 w-full items-center justify-between rounded-md bg-gray-300 p-3 text-zinc-700">
            {" "}
            <p>
              {`${emoji} ${" "}`}
              {countryCode}
            </p>
            <p className="ml-auto mr-2">{cityName}</p>
            <p>{principality}</p>
          </div>
        </div>

        <div className=" mb-4 flex h-8 w-full flex-col items-start justify-between space-y-[2px] rounded-md">
          <label htmlFor="notes">Date Visited</label>
          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            className="h-8 w-full rounded-md border-gray-300 bg-gray-300 px-3 py-3 text-zinc-700 outline-none focus:border-blue-400"
          />
        </div>
        <div className="space-y-[2px]">
          <label htmlFor="notes">Notes about visit to location</label>
          <textarea
            id="notes"
            onChange={(e) => setNote(e.target.value)}
            value={note}
            className="w-full rounded-md border-2 border-gray-300 bg-gray-300 px-3 py-2 text-zinc-700 placeholder-zinc-400 outline-none focus:border-blue-400 "
          ></textarea>
        </div>

        <div className="flex w-full items-center justify-between">
          <Button className="p-2 font-semibold">Add</Button>
          <Button
            onClick={() => navigate(-1)}
            className=" bg-gray-800 p-2 font-semibold hover:bg-gray-800"
          >
            &larr; Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddLocation;
