import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/transactions", {
        headers: { Accept: "application/json" }
      });

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      setTransactions(data);
      setFilteredData(data);
      setError(null);
    } catch (err) {
      setError("Something went wrong while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (category === "all") {
      setFilteredData(transactions);
    } else {
      setFilteredData(
        transactions.filter((t) => t.category === category)
      );
    }
  }, [category, transactions]);

  const categories = ["all", ...new Set(transactions.map(t => t.category))];

  const totals = transactions.reduce((acc, t) => {
    if (t.amount < 0) {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
    }
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h2>Transactions</h2>

      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {filteredData.map((t) => (
            <li key={t.id}>
              <strong>{t.description}</strong> | ₹{t.amount} |{" "}
              {t.category} | {t.status}
            </li>
          ))}
        </ul>
      )}

      <h3>Spending Summary</h3>
      {Object.keys(totals).length === 0 ? (
        <p>No spending recorded</p>
      ) : (
        Object.entries(totals.map ? {} : totals).map(([cat, amt]) => (
          <p key={cat}>
            {cat}: ₹{amt}
          </p>
        ))
      )}
    </div>
  );
}

export default App;