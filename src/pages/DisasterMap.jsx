import MapComponent from '../components/map/MapComponent';
import {MapControls} from '../components/map/MapControls';

const DisasterMap = () => {
  return (
    <div className="h-[calc(100vh-80px)] relative">
      <MapComponent />
      <MapControls />
    </div>
  );
};

export default DisasterMap;