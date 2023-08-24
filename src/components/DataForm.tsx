import { useMap } from "react-leaflet";

import TextField from "./TextField";
import osmtogeojson from "osmtogeojson";
import { fetchOSMData } from "../utils";
import { useState } from "react";

export function DataForm() {
  const map = useMap();
  const [geojson, setGeojson] = useState(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    console.log({ formElement, isValid });

    if (isValid) {
      const formData = new FormData(formElement);
      const bbox = Object.fromEntries(formData.entries());
      console.log(bbox);
      const { minLon, minLat } = bbox;

      try {
        const data = await fetchOSMData(bbox);

        const geojson = osmtogeojson(data);
        console.log(geojson);

        console.log({ data });

        // setGeojson(geojson);

        // const { current = {} } = mapRef;
        // const { leafletElement: map } = current;

        console.log({ minLon, minLat });
        map.flyTo([minLon, minLat], 9, {
          duration: 2,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="absolute form-wrapper">
      <form onSubmit={onSubmit} noValidate>
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
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
