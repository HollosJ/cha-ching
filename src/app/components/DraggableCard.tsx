import React from 'react';
import DashboardCard from './DashboardCard';

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

const DraggableCard = ({ children, title, className }: Props) => {
  return (
    <DashboardCard title={title} className={`${className} h-full`}>
      {children}
    </DashboardCard>
  );
};

export default DraggableCard;
