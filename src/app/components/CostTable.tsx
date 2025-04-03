import { Expense } from "@/app/types";

type Props = {
  data: Expense[];
  showTotal?: boolean;
};

const CostTable = ({ data, showTotal = true }: Props) => {
  // If total cost is 0, don't show the table
  if (data.reduce((sum, row) => sum + row.cost, 0) === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) =>
            row.cost > 0 ? (
              <tr key={index} className="first:mt-4">
                <td>{row.name}</td>
                <td className="text-right">
                  {row.cost > 0 ? `£${row.cost.toFixed(2)}` : "N/A"}
                </td>
              </tr>
            ) : null,
          )}
        </tbody>
      </table>

      {showTotal && (
        <div className="mt-2 text-right font-bold">
          Total: £
          {data.reduce((sum, row) => sum + (row.cost || 0), 0).toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default CostTable;
