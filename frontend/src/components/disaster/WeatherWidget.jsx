export const WeatherWidget = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 h-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Weather</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">24°C</p>
            <p className="text-gray-600">Sunny</p>
          </div>
          <div className="text-5xl">☀️</div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Humidity: 45%</p>
          <p>Wind: 12 km/h</p>
        </div>
      </div>
    );
  };