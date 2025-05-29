import DashboardCard from "@/app/components/Dashboard/Cards/DashboardCard";
import { FormData } from "@/app/types";

export default function IncomeCard({ data }: { data: FormData }) {
  const { income } = data;

  return (
    <DashboardCard title="Income 💰">
      <p className="text-primary font-black">
        <span className="text-5xl">£{income}</span>
        <sup className="">/month</sup>
      </p>
    </DashboardCard>
  );
}
