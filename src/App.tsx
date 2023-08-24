import { DataForm, Map } from "./components";
import "./App.css";

// Latitude is a decimal number between -90.0 and 90.0.
// Longitude is a decimal number between -180.0 and 180.0.

function App() {
  const geojson = null;

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full">
        <Map geojsonData={geojson}>
          <DataForm />
        </Map>
      </div>
    </main>
  );
}

export default App;
