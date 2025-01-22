import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TourProps } from "../index.types";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { useGetCountry } from "@/react-query/query/quiz";

const Map: React.FC<TourProps> = ({ detailTour }) => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    data: countriesData,
    error: countriesError,
    isLoading,
  } = useGetCountry(detailTour.country);

  useEffect(() => {
    if (countriesError) {
      setError("Unable to fetch country and map.");
      return;
    }
    if (countriesData && countriesData[0]?.latlng) {
      setCoordinates([countriesData[0].latlng[0], countriesData[0].latlng[1]]);
      setError(null);
    } else {
      setError("No location data available.");
    }
  }, [countriesData, countriesError]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Map of {detailTour.country}
        </h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Map of {detailTour.country}
      </h2>
      <div className="h-64 w-full rounded-lg shadow-md">
        <MapContainer
          center={coordinates as [number, number]}
          zoom={12}
          className="h-full w-full rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coordinates as [number, number]}>
            <Popup>{detailTour.city}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
