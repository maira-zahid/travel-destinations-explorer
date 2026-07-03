function DestinationCard(props) {
  const { image, placeName, country, budget, duration, season } = props;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={placeName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          ✈️ {placeName}
        </h2>

        <p className="mb-2">
          🌍 <span className="font-semibold">Country:</span> {country}
        </p>

        <p className="mb-2">
          💰 <span className="font-semibold">Budget:</span> Rs. {budget}
        </p>

        <p className="mb-2">
          📅 <span className="font-semibold">Duration:</span> {duration}
        </p>

        <p className="mb-4">
          ☀️ <span className="font-semibold">Best Season:</span> {season}
        </p>

        {budget < 50000 ? (
          <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
            👍 Budget Friendly
          </span>
        ) : (
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">
            👑 Luxury Trip
          </span>
        )}
      </div>

    </div>
  );
}

export default DestinationCard;