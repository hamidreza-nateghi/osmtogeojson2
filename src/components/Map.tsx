import { forwardRef } from "react";
import { Map as LeafletMap, TileLayer, GeoJSON } from "react-leaflet";

const Map = forwardRef(function Map({ gejsonData }, ref) {
  return (
    <LeafletMap
      ref={ref}
      center={[30, 30]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: 300 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={gejsonData} />
    </LeafletMap>
  );
});

export default Map;
