import React from 'react';

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const DashboardCard = ({ title, children, className }: Props) => {
  return (
    <div
      className={`p-4 bg-white border-2 relative overflow-y-auto text-gray-700 shadow-md ${className}`}
    >
      {title && <h2 className="mb-4 text-lg font-bold md:text-xl">{title}</h2>}
      {children}
    </div>
  );
};

export default DashboardCard;
