import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../ui/Button";
import { useReverseGeoCoding } from "../hooks/useReverseGeoCoding";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";
// import Input from "../ui/Input";

const AddLocation = () => {
  const {
    isLoadingGeocoding,
    cityName,
    country,
    emoji,
    geocodingError,
    countryCode,
    principality,
  } = useReverseGeoCoding();
  const [city, setCity] = useState(cityName);
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [lat, lng] = useUrlPosition();

  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityname: city || cityName,
      country,
      note,
      date,
      countrycode: countryCode,
      principality,
      latitude: lat,
      longitude: lng,
    };

    try {
      setDisabled(true);

      await axiosPrivate.post("/locations", newCity, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      toast.success("City is successfully saved");
      navigate("/dashboard/locations");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDisabled(false);
    }
  };

  if (!lat && !lng) {
    return (
      <div className="p-4">
        <div className="flex min-h-[250px] w-full items-center justify-center rounded-md bg-gray-700 p-4 text-center text-zinc-100">
          <p>Start by clicking somewhere on the map</p>
        </div>
      </div>
    );
  }

  if (isLoadingGeocoding) {
    return (
      <div className="p-4">
        <div className="flex min-h-[250px] w-full items-center justify-center rounded-md bg-gray-700 p-4 text-center text-zinc-100">
          <Spinner />
        </div>
      </div>
    );
  }

  if (geocodingError) {
    return (
      <div className="p-4">
        <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-md bg-gray-700 p-4 text-center text-zinc-100">
          <span className="mt-auto block">{geocodingError}</span>
          <div className="ml-auto mt-auto">
            {" "}
            <Button
              onClick={() => navigate(-1)}
              className=" bg-gray-800 p-2 font-semibold hover:bg-gray-900"
            >
              &larr; Back
            </Button>
          </div>
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
          <div className="relative w-full">
            <input
              type="text"
              disabled={disabled}
              id="city"
              onChange={(e) => setCity(e.target.value)}
              className="h-8 w-full rounded-md bg-gray-300 pl-3 text-zinc-700 outline-none"
              defaultValue={cityName}
            />
            <div className="absolute right-0 top-1/2 flex h-8 -translate-y-1/2 transform items-center justify-between space-x-2 rounded-md bg-gray-300 p-3 text-zinc-700">
              <p>{principality}</p>
              <p>
                {countryCode}
                {`${emoji} ${" "}`}
              </p>
            </div>
          </div>
        </div>

        <div className=" mb-4 flex h-8 w-full flex-col items-start justify-between space-y-[2px] rounded-md">
          <label htmlFor="notes">When Did You Visit {cityName}</label>
          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            disabled={disabled}
            className="h-8 w-full rounded-md border-gray-300 bg-gray-300 px-3 py-3 text-zinc-700 outline-none focus:border-blue-400"
          />
        </div>
        <div className="space-y-[2px]">
          <label htmlFor="notes">Notes about your visit to {cityName}</label>
          <textarea
            id="notes"
            onChange={(e) => setNote(e.target.value)}
            value={note}
            disabled={disabled}
            className="w-full rounded-md border-2 border-gray-300 bg-gray-300 px-3 py-2 text-zinc-700 placeholder-zinc-400 outline-none focus:border-blue-400"
          ></textarea>
        </div>

        <div className="flex w-full items-center justify-between">
          <Button
            type="submit"
            disabled={disabled}
            className="p-2 font-semibold"
            onClick={handleSubmit}
          >
            Add
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/dashboard/locations")}
            disabled={disabled}
            className=" bg-gray-800 p-2 font-semibold hover:bg-gray-900"
          >
            &larr; Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddLocation;
