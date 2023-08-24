import { useState } from "react";
import { useMap } from "react-leaflet";
import osmtogeojson from "osmtogeojson";

import { TextField } from "./TextField";
import { fetchOSMData, type BBox } from "../utils";

export function DataForm() {
  const map = useMap();
  const [error, setError] = useState("");
  const [geojson, setGeojson] = useState(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    if (isValid) {
      const formData = new FormData(formElement);
      const bbox = Object.fromEntries(formData.entries()) as unknown as BBox;
      const { minLon, minLat } = bbox;

      try {
        const data = await fetchOSMData(bbox);
        const geojson = osmtogeojson(data);

        // setGeojson(geojson);

        map.flyTo([minLon, minLat], 10, {
          duration: 2,
        });
      } catch (e) {
        console.error(e.message);
        setError(e.message);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="absolute form-wrapper">
      <TextField
        id="min_lon"
        name="minLon"
        label="Min Longitude"
        type="number"
        step="0.01"
        required
        min="-180"
        max="180"
      />
      <TextField
        id="min_lat"
        name="minLat"
        label="Min Latitude"
        type="number"
        step="0.01"
        required
        min="-90"
        max="90"
      />
      <TextField
        id="max_lon"
        name="maxLon"
        label="Max Longitude"
        type="number"
        step="0.01"
        required
        min="-180"
        max="180"
      />
      <TextField
        id="max_lat"
        name="maxLat"
        label="Max Latitude"
        type="number"
        step="0.01"
        required
        min="-90"
        max="90"
      />
      <p className="error">{error}</p>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
