import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocationApi";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useSearchParams } from "react-router-dom";

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
    <div className="h-1/2 w-full bg-gray-800 md:h-full">
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className="h-full"
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
