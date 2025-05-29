import DashboardCard from "@/app/components/Dashboard/Cards/DashboardCard";
import { FormData } from "@/app/types";

type Insight = {
  message: string;
  tone: "positive" | "negative" | null;
  condition: (data: FormData) => boolean;
};

const WEEKLY_GROCERY_COST = 63.5;
const MONTHLY_GROCERY_COST = WEEKLY_GROCERY_COST * 4.33;

export default function InsightsCard({ data }: { data: FormData }) {
  const insights: Insight[] = [
    {
      message: `The average British household spends £${MONTHLY_GROCERY_COST.toFixed(2)} per month on groceries, you only spend £${data.foodGroceries}`,
      tone: "positive",
      condition: (data) => data.foodGroceries < MONTHLY_GROCERY_COST,
    },
    {
      message: `The average British household spends £${MONTHLY_GROCERY_COST.toFixed(2)} per month on groceries, you spend £${data.foodGroceries}`,
      tone: "negative",
      condition: (data) => data.foodGroceries > MONTHLY_GROCERY_COST,
    },
  ];

  const filteredInsights = insights.filter((insight) =>
    insight.condition(data),
  );

  return (
    <DashboardCard
      title="Insights 👁️"
      transparent={filteredInsights.length === 0}
    >
      <div className="grid gap-2">
        {filteredInsights.map(({ message, tone }, i) => {
          return (
            <p
              key={i}
              className={`border-2 border-black p-1 text-sm ${tone === "positive" ? "bg-primary text-white" : tone === "negative" ? "bg-danger text-white" : ""}`}
            >
              {message}
            </p>
          );
        })}
      </div>
    </DashboardCard>
  );
}
