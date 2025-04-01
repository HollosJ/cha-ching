"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import CostTable from "../components/CostTable";
import DraggableCard from "../components/DraggableCard";

import DashboardLoadingGrid from "../components/DashboardLoadingGrid";
import EditButton from "../components/EditButton";
import { Data, LayoutItem } from "../types";

const ResponsiveGridLayout = WidthProvider(Responsive);

function DashboardPage() {
  const router = useRouter();

  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [layout, setLayout] = useState<LayoutItem[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    // Fetch our data and layout from local storage
    // If no data is found, redirect to the get started page
    const fetchData = async () => {
      const storedData = localStorage.getItem("data");

      if (!storedData) {
        router.push("/get-started");
        return;
      }

      const parsedData = JSON.parse(storedData) as Data;

      const storedLayout = localStorage.getItem("dashboardLayout");

      const newLayout = storedLayout
        ? JSON.parse(storedLayout)
        : generateDefaultLayout();

      setLayout(newLayout);

      setData(parsedData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const generateDefaultLayout = (): LayoutItem[] => {
    return [
      { i: "income", x: 0, y: 0, w: 1, h: 1 },
      { i: "subscriptions", x: 1, y: 0, w: 1, h: 3 },
      { i: "home", x: 2, y: 0, w: 1, h: 1 },

      { i: "food", x: 0, y: 1, w: 1, h: 1 },
      { i: "car", x: 2, y: 1, w: 1, h: 1 },

      { i: "utilities", x: 0, y: 2, w: 1, h: 1 },
      { i: "tips", x: 2, y: 2, w: 1, h: 1 },
    ];
  };

  const onLayoutChange = (newLayout: LayoutItem[]) => {
    setLayout(newLayout);
    localStorage.setItem("dashboardLayout", JSON.stringify(newLayout));
  };

  return (
    <div className="container p-4">
      {loading && <DashboardLoadingGrid />}

      {!loading && !data && <>No data found</>}

      {data && (
        <>
          <EditButton
            editMode={editMode}
            setEditMode={setEditMode}
            className="fixed right-4 bottom-4 hidden md:flex"
          />

          <ResponsiveGridLayout
            containerPadding={[0, 0]}
            rowHeight={300}
            layouts={{ lg: layout }}
            cols={{ lg: 3, md: 3, sm: 3, xs: 3, xxs: 3 }}
            onLayoutChange={onLayoutChange}
            isResizable={editMode}
            isDraggable={editMode}
            className={
              editMode
                ? "bg-red-400/25 outline-2 outline-offset-2 outline-dotted"
                : ""
            }
            compactType={null} // Prevents auto-compacting to one column
          >
            <div key="income" className={`${editMode ? "cursor-move" : ""}`}>
              <DraggableCard title="Income 💰">
                <h3 className="text-primary mb-4 text-2xl font-bold md:text-4xl">
                  £{data.income.toFixed(2)}
                </h3>
              </DraggableCard>
            </div>

            <div key="home" className={`${editMode ? "cursor-move" : ""}`}>
              <DraggableCard title="Home 🏠">
                <CostTable
                  data={[
                    { name: "Rent/Mortgage", amount: data.homePayment },
                    { name: "Council Tax", amount: data.homeCouncilTax },
                  ]}
                />
              </DraggableCard>
            </div>

            <div key="car" className={`${editMode ? "cursor-move" : ""}`}>
              <DraggableCard title="Car 🚗">
                <CostTable
                  data={[
                    { name: "Car Finance 💳", amount: data.carFinance },
                    { name: "Car Insurance 🛡️", amount: data.carInsurance },
                    { name: "Car Fuel ⛽", amount: data.carFuel },
                  ]}
                />
              </DraggableCard>
            </div>

            <div key="food" className={`${editMode ? "cursor-move" : ""}`}>
              <DraggableCard title="Food 🍽️">
                <CostTable
                  data={[
                    { name: "Groceries", amount: data.foodGroceries },
                    { name: "Eating Out", amount: data.foodEatingOut },
                  ]}
                />
              </DraggableCard>
            </div>

            <div key="utilities" className={`${editMode ? "cursor-move" : ""}`}>
              <DraggableCard title="Utilities 💡">
                <CostTable
                  data={[
                    {
                      name: "Electricity ⚡",
                      amount: data.utilitiesElectricity,
                    },
                    { name: "Water 💧", amount: data.utilitiesWater },
                    { name: "Gas 🔥", amount: data.utilitiesGas },
                  ]}
                />
              </DraggableCard>
            </div>

            {data.subscriptions && data.subscriptions.length > 0 && (
              <div
                key="subscriptions"
                className={`${editMode ? "cursor-move" : ""}`}
              >
                <DraggableCard title="Subscriptions 📺">
                  <CostTable
                    data={data.subscriptions.map((subscription) => ({
                      name: subscription.name,
                      amount: subscription.cost,
                    }))}
                    showTotal={false}
                  />
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart width={100} height={200}>
                      <Pie
                        data={data.subscriptions.map((subscription) => ({
                          name: subscription.name,
                          value: subscription.cost,
                        }))}
                        dataKey="value"
                        nameKey="name"
                        cy={100}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        fill="var(--color-primary)"
                        label
                      />

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </DraggableCard>
              </div>
            )}
          </ResponsiveGridLayout>
        </>
      )}
    </div>
  );
}

export default DashboardPage;
