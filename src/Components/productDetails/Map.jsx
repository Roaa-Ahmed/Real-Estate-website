import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={13}
      style={{ height: "480px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.7128, -74.0060]}>
        <Popup>عقار في دمشق</Popup>
      </Marker>
    </MapContainer>
  );
}
