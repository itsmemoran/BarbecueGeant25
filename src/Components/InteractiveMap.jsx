// components/InteractiveMap.jsx
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function InteractiveMap() {
  return (
    <section className="w-full px-4 py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Notre localisation</h2>

      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="w-full h-[400px] max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <Map
            defaultZoom={13}
            defaultCenter={{ lat: 48.8566, lng: 2.3522 }} // Paris par défaut
          />
        </div>
      </APIProvider>
    </section>
  );
}
