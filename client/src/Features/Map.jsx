import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocationApi";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "../ui/Button";
import User from "./User";

const Map = () => {
  const [mapPosition, setMapPosition] = useState([
    6.464142632591611, 3.6460661888122563,
  ]);
  const { isLoading, position, getPosition } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();
  const navigate = useNavigate();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (position && !isNaN(position.lat) && !isNaN(position.lng)) {
      setMapPosition([position.lat, position.lng]);
    }
  }, [position]);

  return (
    <main className="relative h-[55%] w-full overflow-hidden bg-gray-800 md:h-full">
      <div className="flex h-[50px] items-center justify-end gap-x-4 bg-white px-5 py-4 shadow-lg">
        {position && !isNaN(position.lat) && !isNaN(position.lng) && (
          <Button
            className="space-x-1 bg-inherit text-sm hover:bg-inherit md:text-base"
            onClick={() =>
              navigate(`form?lat=${position.lat}&lng=${position.lng}`)
            }
          >
            <span className="flex items-center justify-center gap-x-1 text-zinc-600">
              <FaLocationDot />
              Add current Location
            </span>
          </Button>
        )}
        <User />
      </div>
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className=""
        style={{ height: "calc(100% - 50px)", position: "relative" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <CenterMapOnPosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
      {!position && (
        <div className="absolute bottom-8 right-2 z-[1000]">
          <Button
            onClick={() => getPosition()}
            className="px-3 py-2 font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "loading" : "Get Current Location"}
          </Button>
        </div>
      )}
    </main>
  );
};

function CenterMapOnPosition({ position }) {
  const map = useMap();
  map.setView(position);
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
