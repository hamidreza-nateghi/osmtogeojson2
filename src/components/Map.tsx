import { forwardRef } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  GeoJSON,
  ZoomControl,
} from "react-leaflet";

const Map = forwardRef(function Map({ gejsonData }, ref) {
  return (
    <LeafletMap
      ref={ref}
      center={[30, 30]}
      zoom={9}
      style={{ height: "100%" }}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={gejsonData} />
      <ZoomControl position="bottomright" />
    </LeafletMap>
  );
});

export default Map;
