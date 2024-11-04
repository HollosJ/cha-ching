'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pie, PieChart, ResponsiveContainer, Treemap } from 'recharts';

import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import DraggableCard from '../components/DraggableCard';
import CostTable from '../components/CostTable';

import { LayoutItem, Data } from '../types';
import { toast } from 'sonner';
import EditButton from '../components/EditButton';

const ResponsiveGridLayout = WidthProvider(Responsive);

function DashboardPage() {
  const router = useRouter();

  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [layout, setLayout] = useState<LayoutItem[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data') || '{}');

    // If there is no data, redirect to the get started form
    if (!Object.keys(savedData).length) {
      router.push('/get-started');
      return;
    }

    setData(savedData);

    // If layout saved in local storage, use it, otherwise generate default
    const savedLayout = JSON.parse(
      localStorage.getItem('dashboardLayout') || '[]'
    );
    // setLayout(savedLayout.length > 0 ? savedLayout : generateDefaultLayout());
    setLayout(generateDefaultLayout());

    setLoading(false);
  }, []);

  const generateDefaultLayout = (): LayoutItem[] => {
    return [
      { i: 'income', x: 0, y: 0, w: 1, h: 1 },
      { i: 'home', x: 2, y: 0, w: 1, h: 1 },
      { i: 'car', x: 1, y: 1, w: 1, h: 1 },
      { i: 'food', x: 0, y: 1, w: 1, h: 1 },
      { i: 'subscriptions', x: 1, y: 0, w: 1, h: 3 },
      { i: 'tips', x: 2, y: 2, w: 1, h: 1 },
    ];
  };

  const onLayoutChange = (newLayout: LayoutItem[]) => {
    setLayout(newLayout);
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout));
  };

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>No data available</div>;

  return (
    <div className="container mx-auto p-4">
      <EditButton
        editMode={editMode}
        setEditMode={setEditMode}
        className="absolute bottom-4 right-4"
      />

      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 2, sm: 1, xs: 1, xxs: 1 }}
        rowHeight={300}
        onLayoutChange={onLayoutChange}
        isResizable={editMode}
        isDraggable={editMode}
        style={{ background: 'transparent' }}
        compactType={'horizontal'}
      >
        <div key="income">
          <DraggableCard title="Income 💰">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-primary">
              £{data.income.toFixed(2)}
            </h3>
          </DraggableCard>
        </div>

        <div key="home">
          <DraggableCard title="Home 🏠">
            <CostTable
              data={[
                { name: 'Rent/Mortgage', amount: data.homePayment },
                { name: 'Council Tax', amount: data.homeCouncilTax },
              ]}
            />
          </DraggableCard>
        </div>

        <div key="car">
          <DraggableCard title="Car 🚗">
            <CostTable
              data={[
                { name: 'Car Finance', amount: data.carFinance },
                { name: 'Car Insurance', amount: data.carInsurance },
                { name: 'Car Fuel', amount: data.carFuel },
              ]}
            />
          </DraggableCard>
        </div>

        <div key="food">
          <DraggableCard title="Food 🍽️">
            <CostTable
              data={[
                { name: 'Groceries', amount: data.foodGroceries },
                { name: 'Eating Out', amount: data.foodEatingOut },
              ]}
            />
          </DraggableCard>
        </div>

        <div key="utilities">
          <DraggableCard title="Utilities 🔌">
            <CostTable
              data={[
                { name: 'Electricity', amount: data.utilitiesElectricity },
                { name: 'Water', amount: data.utilitiesWater },
                { name: 'Gas', amount: data.utilitiesGas },
              ]}
            />
          </DraggableCard>
        </div>

        {data.subscriptions && data.subscriptions.length > 0 && (
          <div key="subscriptions">
            <DraggableCard title="Subscriptions 📺">
              <CostTable
                data={data.subscriptions.map((sub) => ({
                  name: sub.name,
                  amount: sub.cost,
                }))}
                showTotal={false}
              />
              <ResponsiveContainer width="100%" height={200}>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data.subscriptions.map((sub) => ({
                      name: sub.name,
                      value: sub.cost,
                    }))}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="var(--primary)"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </DraggableCard>
          </div>
        )}
      </ResponsiveGridLayout>
    </div>
  );
}

export default DashboardPage;
