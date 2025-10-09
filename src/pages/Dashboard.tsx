import { DashboardCard } from "@/components/DashboardCard";
import { Chart } from "@/components/Chart";
import { transactions } from "@/data/mockData";

export default function Dashboard() {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Finance Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DashboardCard title="Income" value={`$${income}`} />
        <DashboardCard title="Expenses" value={`$${expenses}`} />
        <DashboardCard title="Balance" value={`$${balance}`} />
      </div>
      <Chart />
    </div>
  );
}
