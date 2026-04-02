export default function Insights({ transactions }) {
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-semibold">Insights</h2>
      <p>Highest Spending Category: {highest}</p>
      <p>Total Transactions: {transactions.length}</p>
    </div>
  );
}