import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MarkerClusterer } from "@googlemaps/markerclusterer";

const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

const MapComponent = () => {
  const disasters = useSelector((state) => state.disasters.list);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef(null); // Reference to the map container

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Load API key from environment variables
    loadGoogleMapsScript(apiKey)
      .then(() => {
        setMapReady(true);
      })
      .catch((error) => {
        console.error("Failed to load Google Maps script:", error);
      });
  }, []);

  useEffect(() => {
    if (mapReady) {
      initMap();
    }
  }, [mapReady]);

  const loadGoogleMapsScript = (apiKey) => {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve(); // Google Maps is already loaded
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 },
      mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID, // Load Map ID from environment variables
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((position, i) => {
      const label = labels[i % labels.length];
      const marker = new window.google.maps.Marker({
        position,
        label,
        map,
      });

      marker.addListener("click", () => {
        infoWindow.setContent(`${position.lat}, ${position.lng}`);
        infoWindow.open(map, marker);
      });

      return marker;
    });

    new MarkerClusterer({ markers, map });
  };

  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      {mapReady ? (
        <div className="relative w-full h-full">
          {/* Map container */}
          <div ref={mapRef} id="map" className="absolute inset-0"></div>
        </div>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;