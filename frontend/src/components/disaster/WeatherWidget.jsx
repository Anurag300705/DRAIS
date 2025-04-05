export const WeatherWidget = () => {
  return (
    <div className="rounded-xl shadow-sm p-4 border bg-white/10 backdrop-blur-md border-white/10 h-full">
      <h2 className="text-xl font-semibold text-white mb-4">Weather</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-white">24°C</p>
          <p className="text-white/60">Sunny</p>
        </div>
        <div className="text-5xl">☀️</div>
      </div>
      <div className="mt-4 text-sm text-white/60">
        <p>Humidity: 45%</p>
        <p>Wind: 12 km/h</p>
      </div>
    </div>
  );
};
