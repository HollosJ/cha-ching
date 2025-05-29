import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type SortableItemProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SortableItem({ id, children, className }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <div
      className={`${className || ""} relative`}
      ref={setNodeRef}
      style={style}
    >
      {/* Drag handle */}
      <div
        className="justify-content-start absolute top-4 right-4 z-10 inline-grid cursor-grab grid-cols-2 gap-1 p-2 hover:bg-slate-300 active:cursor-grabbing"
        {...attributes}
        {...listeners}
      >
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
      </div>

      {children}
    </div>
  );
}
