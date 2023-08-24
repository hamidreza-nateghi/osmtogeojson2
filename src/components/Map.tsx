import { forwardRef } from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";

const Map = forwardRef(function Map({ gejsonData, children }, ref) {
  return (
    <MapContainer
      // ref={ref}
      center={[30, 30]}
      zoom={9}
      style={{ height: "100%" }}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={gejsonData} />
      <ZoomControl position="bottomright" />
      {children}
    </MapContainer>
  );
});

export default Map;
