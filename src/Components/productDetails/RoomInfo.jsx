import { FaBath, FaBed, FaExpand } from "react-icons/fa";
const RoomInfo = () => {
  return (
    <div className="flex items-center gap-4 text-gray-600 mb-4">
      <div className="flex items-center gap-1">
        <FaBed className="text-sm" />
        <span className="text-sm">4 Bed</span>
      </div>
      <span className="text-gray-300">•</span>
      <div className="flex items-center gap-1">
        <FaBath className="text-sm" />
        <span className="text-sm">2 Bath</span>
      </div>
      <span className="text-gray-300">•</span>
      <div className="flex items-center gap-1">
        <FaExpand className="text-sm" />
        <span className="text-sm">4,000 sqft</span>
      </div>
    </div>
  );
};

export default RoomInfo;
