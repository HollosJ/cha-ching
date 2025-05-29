import CostTable from "@/app/components/CostTable";
import DashboardCard from "@/app/components/Dashboard/Cards/DashboardCard";
import { FormData } from "@/app/types";

export default function HouseCard({ data }: { data: FormData }) {
  const { homePayment, homeCouncilTax } = data;

  const tableData = [
    { name: "Mortgage/Rent", cost: homePayment },
    { name: "Council Tax", cost: homeCouncilTax },
  ];

  const total = tableData.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <DashboardCard title="House 🏠" transparent={!total}>
      <CostTable data={tableData} />
    </DashboardCard>
  );
}
