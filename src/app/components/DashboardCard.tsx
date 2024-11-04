import React from 'react';

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const DashboardCard = ({ title, children, className }: Props) => {
  return (
    <div
      className={`p-4 bg-white border-2 relative overflow-y-auto ${className}`}
    >
      {title && <h2 className="text-lg md:text-xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default DashboardCard;
