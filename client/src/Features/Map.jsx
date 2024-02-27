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
import { useSearchParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "../ui/Button";
import User from "./User";

const Map = () => {
  const [mapPosition, setMapPosition] = useState([
    6.464142632591611, 3.6460661888122563,
  ]);

  // const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, position, error, getPosition } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng],
  );

  useEffect(() => {
    if (position) {
      setMapPosition([position.lat, position.lng]);
    }
  }, [position]);

  return (
    <div className="relative h-1/2 w-full overflow-x-hidden bg-gray-800 md:h-full">
      <div className=" flex h-[50px] items-center justify-end gap-x-4 bg-white px-5 py-4 shadow-lg">
        <Button className="space-x-1 bg-inherit hover:bg-inherit">
          <span className="flex items-center justify-center gap-x-1 text-zinc-600">
            <FaLocationDot />
            Add current Location
          </span>
        </Button>

        <User />
      </div>
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className=""
        style={{ height: "calc(100% - 50px)" }}
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
        <ChangePosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
}

function DetectClick() {
  const [searchParams, setSearchParams] = useSearchParams();
  useMapEvents({
    click: (e) => {
      setSearchParams({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
}

export default Map;
