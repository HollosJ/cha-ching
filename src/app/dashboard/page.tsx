"use client";

import FoodCard from "@/app/components/Dashboard/Cards/FoodCard";
import HouseCard from "@/app/components/Dashboard/Cards/HouseCard";
import IncomeCard from "@/app/components/Dashboard/Cards/IncomeCard";
import InsightsCard from "@/app/components/Dashboard/Cards/InsightsCard";
import SubscriptionsCard from "@/app/components/Dashboard/Cards/SubscriptionsCard";
import TransportCard from "@/app/components/Dashboard/Cards/TransportCard";
import UtilitiesCard from "@/app/components/Dashboard/Cards/UtilitiesCard";
import DashboardLoadingGrid from "@/app/components/DashboardLoadingGrid";
import { SortableItem } from "@/app/components/SortableItem";
import { FormData } from "@/app/types";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DashboardPage() {
  const router = useRouter();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const CARD_COMPONENTS = [
    {
      id: "income",
      component: IncomeCard,
    },

    {
      id: "house",
      component: HouseCard,
    },
    {
      id: "utilities",
      component: UtilitiesCard,
    },
    {
      id: "subscriptions",
      component: SubscriptionsCard,
    },
    {
      id: "food",
      component: FoodCard,
    },
    {
      id: "transport",
      component: TransportCard,
    },
    {
      id: "insights",
      component: InsightsCard,
    },
  ];

  const [data, setData] = useState<FormData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [layout, setLayout] = useState<string[]>([]);

  const saveLayout = (layout: string[]) => {
    const layoutString = localStorage.getItem("layout");

    const oldlayout = layoutString ? JSON.parse(layoutString) : null;
    const newLayout = layout;

    if (oldlayout === newLayout) return;

    setLayout(newLayout);
    localStorage.setItem("layout", JSON.stringify(newLayout));
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem("data");

      if (!storedData) {
        router.push("/get-started");
        return;
      }

      const storedLayout = localStorage.getItem("layout");
      const DEFAULT_LAYOUT = [
        "income",
        "insights",
        "house",
        "utilities",
        "subscriptions",
        "food",
        "transport",
      ];

      setData(JSON.parse(storedData));
      setLayout(storedLayout ? JSON.parse(storedLayout) : DEFAULT_LAYOUT);

      setLoading(false);
    };

    fetchData();
  }, [router]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Check if the item was dropped in a valid position
    if (!over || active.id === over.id) return;

    // Find the current and new indices
    const oldIndex = layout.findIndex((item) => item === active.id);
    const newIndex = layout.findIndex((item) => item === over.id);

    // If the indices are the same, no change is needed
    if (oldIndex === newIndex) return;

    // Create a new layout array with the updated order
    const newLayout = [...layout];
    const [movedItem] = newLayout.splice(oldIndex, 1);
    newLayout.splice(newIndex, 0, movedItem);

    // Save the new layout and update the state
    saveLayout(newLayout);
  };

  return (
    <div className="container p-4">
      {loading && <DashboardLoadingGrid />}

      {!loading && !data && <>No data found</>}

      {data && layout && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="grid gap-2 md:grid-cols-3 md:grid-rows-3">
            <SortableContext items={layout} strategy={rectSortingStrategy}>
              {layout.map((item) => {
                const cardComponent = CARD_COMPONENTS.find(
                  (component) => component.id === item,
                );

                if (!cardComponent) return null;

                const Component = cardComponent.component;
                return (
                  <SortableItem className="h-80" key={item} id={item}>
                    <Component data={data} />
                  </SortableItem>
                );
              })}
            </SortableContext>
          </div>
        </DndContext>
      )}
    </div>
  );
}

export default DashboardPage;
