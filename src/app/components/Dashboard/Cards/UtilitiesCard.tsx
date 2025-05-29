import CostTable from "@/app/components/CostTable";
import DashboardCard from "@/app/components/Dashboard/Cards/DashboardCard";
import { FormData } from "@/app/types";

export default function UtilitiesCard({ data }: { data: FormData }) {
  const { utilitiesElectricity, utilitiesWater, utilitiesGas } = data;

  const tableData = [
    { name: "Electricity", cost: utilitiesElectricity },
    { name: "Water", cost: utilitiesWater },
    { name: "Gas", cost: utilitiesGas },
  ];

  const total = tableData.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <DashboardCard title="Utilities 💡" transparent={!total}>
      <CostTable data={tableData} />
    </DashboardCard>
  );
}
