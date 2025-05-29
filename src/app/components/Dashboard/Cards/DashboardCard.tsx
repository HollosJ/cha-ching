import { ReactNode } from "react";

type Props = {
  title?: string;
  className?: string;
  children: ReactNode;
  transparent?: boolean;
};

const DashboardCard = ({ title, children, className, transparent }: Props) => {
  return (
    <div
      className={`relative h-full overflow-y-auto border-2 bg-white p-4 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 ${transparent ? "opacity-25" : ""} ${className}`}
    >
      {title && <h2 className="mb-4 text-lg font-bold">{title}</h2>}

      {children}
    </div>
  );
};

export default DashboardCard;
