import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Charts({ transactions }) {
  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { name: curr.category, value: 0 };
      }
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-2">Spending Breakdown</h2>
        <PieChart width={300} height={200}>
          <Pie data={categoryData} dataKey="value">
            {categoryData.map((_, index) => (
              <Cell key={index} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-2">Trend</h2>
        <LineChart width={300} height={200} data={transactions}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="amount" />
        </LineChart>
      </div>
    </div>
  );
}