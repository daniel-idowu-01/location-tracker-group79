/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LocationsContext = createContext();

function LocationsProvider({ children }) {
  const [locations, setLocations] = useState([]);
  const [activeCity, setActiveCity] = useState(null);
  const [formkey, setFormkey] = useState("");

  return (
    <LocationsContext.Provider
      value={{
        locations,
        setLocations,
        activeCity,
        setActiveCity,
        formkey,
        setFormkey,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
}

export default LocationsProvider;
