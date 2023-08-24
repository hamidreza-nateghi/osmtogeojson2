import { useRef, useState } from "react";
import "./App.css";
import Map from "./components/Map";
import { DataForm } from "./components/DataForm";
import "leaflet/dist/leaflet.css";

// Latitude is a decimal number between -90.0 and 90.0.
// Longitude is a decimal number between -180.0 and 180.0.

function App() {
  const mapRef = useRef();

  const geojson = {};

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full">
        <Map ref={mapRef} geojsonData={geojson}>
          <DataForm />
        </Map>
      </div>
    </main>
  );
}

export default App;
