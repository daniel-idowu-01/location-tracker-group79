import { useContext } from "react";
import { LocationsContext } from "../contexts/LocationsContext";

export function useLocations() {
  const context = useContext(LocationsContext);

  if (!context) {
    throw new Error("LocationsContext was used outside LocationsProvider");
  }

  return context;
}
