import React from 'react';

const DashboardLoadingGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="animate-pulse bg-slate-200 h-80"></div>
      <div className="animate-pulse bg-slate-200 row-span-2"></div>
      <div className="animate-pulse bg-slate-200 h-80"></div>
      <div className="animate-pulse bg-slate-200 h-80"></div>
      <div className="animate-pulse bg-slate-200 h-80"></div>
      <div className="animate-pulse bg-slate-200 h-80"></div>
      <div className="animate-pulse bg-slate-200 h-80"></div>
      <div className="animate-pulse bg-slate-200 h-80"></div>
    </div>
  );
};

export default DashboardLoadingGrid;
