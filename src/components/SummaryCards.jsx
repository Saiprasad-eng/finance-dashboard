export default function SummaryCards({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} />
      <Card title="Expense" value={expense} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-2xl font-bold">₹{value}</p>
    </div>
  );
}