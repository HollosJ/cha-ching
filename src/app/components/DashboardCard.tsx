import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const DashboardCard = ({ title, children, className }: Props) => {
  return (
    <div
      className={`relative overflow-y-auto border-2 bg-white p-4 text-gray-700 ${className}`}
    >
      {title && <h2 className="mb-4 text-lg font-bold md:text-xl">{title}</h2>}
      {children}
    </div>
  );
};

export default DashboardCard;
