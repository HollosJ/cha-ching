import CostTable from "@/app/components/CostTable";
import DashboardCard from "@/app/components/DashboardCard";
import { FormData } from "@/app/types";

export default function TransportCard({ data }: { data: FormData }) {
  const { publicTransport, carFinance, carInsurance, carFuel } = data;

  const tableData = [
    { name: "Public Transport", cost: publicTransport },
    { name: "Finance", cost: carFinance },
    { name: "Insurance", cost: carInsurance },
    { name: "Fuel", cost: carFuel },
  ];

  const total = tableData.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <DashboardCard title="Transport 🚗" transparent={!total}>
      <CostTable data={tableData} />
    </DashboardCard>
  );
}
