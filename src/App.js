import DestinationCard from "./components/DestinationCard";
import destinations from "./data/destinations";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-3">
          🌍 Travel Destinations Explorer
        </h1>

        <p className="text-center text-gray-700 text-lg mb-10">
          Discover beautiful destinations around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              placeName={destination.placeName}
              country={destination.country}
              budget={destination.budget}
              duration={destination.duration}
              season={destination.season}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;