import { FormData } from "@/app/types";
import DashboardCard from "@/app/components/Dashboard/Cards/DashboardCard";
import CostTable from "@/app/components/CostTable";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function SubscriptionsCard({ data }: { data: FormData }) {
  const { subscriptions } = data;

  const tableData = subscriptions.map(({ name, cost }) => ({
    name: name,
    cost: cost,
    value: cost,
  }));

  const total = tableData.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <DashboardCard title="Subscriptions 📺" transparent={!total}>
      <CostTable data={tableData} />

      <div className="mt-4 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={tableData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="var(--color-primary)"
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
