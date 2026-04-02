export default function TransactionTable({ transactions, role }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      <h2 className="font-semibold mb-3">Transactions</h2>

      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Category</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="p-2">{t.date}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2">{t.type}</td>
              <td className="p-2">₹{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}