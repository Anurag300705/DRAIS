// StatsOverview.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Earthquakes', value: 35 },
  { name: 'Floods', value: 25 },
  { name: 'Wildfires', value: 20 },
  { name: 'Others', value: 20 },
];

// Keep the original colors
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const StatsOverview = () => {
  return (
    <div className="rounded-xl shadow-sm p-6 border bg-white/10 backdrop-blur-md border-white/10">
      <h2 className="text-lg font-semibold mb-4 text-white">Disaster Statistics</h2>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
