import React from 'react';

type Row = {
  name: string;
  amount: number;
};

type Props = {
  data: Row[];
  showTotal?: boolean;
};

const CostTable = ({ data, showTotal = true }: Props) => {
  // If total amount is 0, don't show the table
  if (data.reduce((sum, row) => sum + row.amount, 0) === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) =>
            row.amount > 0 ? (
              <tr key={index}>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2 text-right">
                  {row.amount > 0 ? `£${row.amount.toFixed(2)}` : 'N/A'}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      {showTotal && (
        <div className="text-right">
          Total: £
          {data.reduce((sum, row) => sum + (row.amount || 0), 0).toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default CostTable;
