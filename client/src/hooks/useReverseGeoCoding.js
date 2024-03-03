import { useState, useEffect } from "react";
import { useUrlPosition } from "./useUrlPosition";
import { convertToEmoji } from "../utils/helper";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function useReverseGeoCoding() {
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [principality, setPrincipality] = useState();
  const [emoji, setEmoji] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  const [lat, lng] = useUrlPosition();

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const data = await res.json();
          console.log(data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere a city",
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
          setCountryCode(data.countryCode);
          setPrincipality(data.principalSubdivision);
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng],
  );

  return {
    isLoadingGeocoding,
    cityName,
    country,
    emoji,
    geocodingError,
    countryCode,
    principality,
  };
}
