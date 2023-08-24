import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import osmtogeojson from "osmtogeojson";
import { fetchOSMData } from "./utils";
import TextField from "./components/TextField";

// Latitude is a decimal number between -90.0 and 90.0.
// Longitude is a decimal number between -180.0 and 180.0.

function App() {
  const minLonRef = useRef<HTMLInputElement>(null);
  const maxLonRef = useRef<HTMLInputElement>(null);
  const minLatRef = useRef<HTMLInputElement>(null);
  const maxLatRef = useRef<HTMLInputElement>(null);

  console.log(minLonRef, maxLonRef);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    console.log({ formElement, isValid });

    if (isValid) {
      const minLon = minLonRef.current?.valueAsNumber;
      const minLat = minLatRef.current?.valueAsNumber;
      const maxLon = maxLonRef.current?.valueAsNumber;
      const maxLat = maxLatRef.current?.valueAsNumber;

      const formData = new FormData(formElement);
      const bbox = Object.fromEntries(formData.entries());
      console.log(bbox);

      try {
        const data = await fetchOSMData(bbox);

        const geojson = osmtogeojson(data);
        console.log(geojson);

        console.log({ data });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="min_lon">Min Longitude</label>
      {/* <input id="min_lon" type="number" step="0.01" ref={minLonRef} required /> */}
      <TextField
        id="min_lon"
        name="minLon"
        type="number"
        step="0.01"
        ref={minLonRef}
        required
        min="-180"
        max="180"
      />
      <label htmlFor="min_lat">Min Latitude</label>
      {/* <input
        id="min_lat"
        type="number"
        step="0.01"
        ref={minLatRef}
        required
        min="-90"
        max="90"
      /> */}
      <TextField
        id="min_lat"
        name="minLat"
        type="number"
        step="0.01"
        ref={minLatRef}
        required
        min="-90"
        max="90"
      />
      <label htmlFor="max_lon">Max Longitude</label>
      {/* <input id="max_lon" type="number" step="0.01" ref={maxLonRef} required /> */}
      <TextField
        id="max_lon"
        name="maxLon"
        type="number"
        step="0.01"
        ref={maxLonRef}
        required
        min="-180"
        max="180"
      />
      <label htmlFor="max_lat">Max Latitude</label>
      {/* <input id="max_lat" type="number" step="0.01" ref={maxLatRef} required /> */}
      <TextField
        id="max_lat"
        name="maxLat"
        type="number"
        step="0.01"
        ref={maxLatRef}
        required
        min="-90"
        max="90"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
