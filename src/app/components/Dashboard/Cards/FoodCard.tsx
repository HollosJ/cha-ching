import CostTable from "@/app/components/CostTable";
import DashboardCard from "@/app/components/DashboardCard";
import { FormData } from "@/app/types";

export default function FoodCard({ data }: { data: FormData }) {
  const { foodGroceries, foodEatingOut } = data;

  const tableData = [
    { name: "Groceries", cost: foodGroceries },
    { name: "Eating Out", cost: foodEatingOut },
  ];

  const total = tableData.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <DashboardCard title="Food 🍔" transparent={!total}>
      <CostTable data={tableData} />
    </DashboardCard>
  );
}
