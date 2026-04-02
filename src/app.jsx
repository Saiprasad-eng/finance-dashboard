import { useState } from "react";
import React from 'react';
import { transactionsData } from "./data/mockData";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionTable from "./components/TransactionTable";
import Insights from "./components/Insights";

function App() {
  const [transactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  return (
    <div className="min-h-screen bg-gray-200 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>

        <select
          className="border p-2 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <SummaryCards transactions={transactions} />
      <Charts transactions={transactions} />
      <TransactionTable transactions={transactions} role={role} />
      <Insights transactions={transactions} />
    </div>
  );
}

export default App;